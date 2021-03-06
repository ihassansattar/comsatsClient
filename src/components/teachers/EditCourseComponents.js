import React, { useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { apiPath } from '../../config'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';
import PDFProvider from './pdfProvider';
import { saveSync } from 'save-file'
import { useAlert } from 'react-alert'
import UpdateIcon from '@material-ui/icons/Update';
import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

export default function CourseUpload(props) {
    const alert = useAlert()
    const [modalOpen, setmodalOpen] = useState(false)
    const [modalLoading, setmodalLoading] = useState(false)
    const [modalMsg, setmodalMsg] = useState({
        err: null,
        success: null,
    })
    const [finalfiles, setFinalfiles] = useState()
    const [initialfiles, setInitialFiles] = useState([]);
    const [allsubjects, setAllsubjects] = useState([]);
    const [subject, setSubject] = useState('');
    const [username, setUsername] = useState('');
    const [loadingUser, setLoadingUser] = useState(false);
    const [error, setError] = useState(false);
    const [compare, setCompare] = useState()
    const [tablediplay, setTabledisplay] = useState('none')
    const [searchloader, setSearchloader] = useState(null)
    const [deleteloader, setDeleteloader] = useState(null)
    const [searchdisplay, setsearchdisplay] = useState('')
    const [updatedisplay, setupdatedisplay] = useState('none')
    const [selectedFile, setSelectedFile] = useState(null)
    const [filename, setfilename] = useState('chosefile')
    const [updating, setupdating] = useState('')
    const [updateId, setupdateId] = useState('')

    useEffect(() => {
        setLoadingUser(true)
        async function checkcredentials() {
            const accessString = localStorage.getItem('JWT');
            if (accessString === null) {

                setLoadingUser(false)
                setError(true)

            }
            else {
                const user = await axios.get(apiPath + '/findUser', {
                    params: {
                        username: props.username,
                    },
                    headers: { Authorization: `JWT ${accessString}` },
                });
                await axios.post(apiPath + '/getassignSubjects', {
                    username: props.username
                }).then(sub => {
                    console.log("username", props.username)
                    console.log("sub", sub.data)
                    setAllsubjects(sub.data)

                })
                const subjects = await axios.get(apiPath + '/findsubjects')

                const coursecomponent = await axios.get(apiPath + '/findcoursecomponents')
                axios.all([user, subjects, coursecomponent]).then(axios.spread((...responses) => {
                    setUsername(responses[0].data.username)

                    // setAllsubjects(responses[1].data)
                    let arr = []
                    setCompare(responses[2].data.map((planet) => {
                        return planet.Type
                    }))

                    setLoadingUser(false)


                })).catch(errors => {

                })


            }
        }
        checkcredentials()


    }, [])
    function searchbysubject(e) {
        if (e.target.value) {
            setSubject(e.target.value)
        }

    }

    async function searchFiles() {
        setSearchloader("searching...")
        axios.get(apiPath + `/findcoursefiles/${username}/${subject}`).then(response => {
            setInitialFiles(response.data)
            let allcourses = []
            let downloadall = []
            let allfiles = []
            let sortedfiles = []

            allfiles = response.data.map((planet) => {
                return planet
            });

            let j = [];
            sortedfiles = compare.map((planet) => {
                return response.data.map((planet2) => {
                    if (planet == planet2.type)
                        j.push(planet2)
                    return planet2

                });

            });
            downloadall = j.map((planet) => {
                return planet.url

            });
            allcourses = j.map((planet) => {
                return JSON.stringify(planet)
            });

            if (allcourses == '') {
                alert.show('sorry no uploads ', {
                    position: 'bottom right',
                })

                // window.location.reload();
            }
            else {
                setFinalfiles(downloadall)
                setTabledisplay('')
            }
            setSearchloader('')
        })


    }
    function cancel() {
        setsearchdisplay('')
        setupdatedisplay('none')
        setupdateId('')
    }
    function upadate(id) {
        setsearchdisplay('none')
        setupdatedisplay('')
        setupdateId(id)
    }
    function updateFile() {
        setupdating('updating..')
        const data = new FormData()
        data.append('file', selectedFile)
        data.append('id', updateId)
        axios.put(apiPath + "/updatecoursefiles", data, {
        }).then(res => {
            searchFiles()
            alert.success(res.data)
            setupdating('')
            setsearchdisplay('')
            setupdatedisplay('none')
            setupdateId('')
        })
    }
    function handlefile(e) {
        var file = e.target.files[0];
        console.log(file)

        if (e.target.files[0]) {
            setfilename(file.name)
        }
        setSelectedFile(file)

    }
    function deletefiles(id) {
        setSearchloader("deleting..")
        axios.delete(apiPath + `/deletecoursefiles/${id}`)
            .then(response => {
                axios.get(apiPath + `/findcoursefiles/${username}/${subject}`).then(response => {
                    setInitialFiles(response.data)
                    let allcourses = []
                    let downloadall = []
                    let allfiles = []
                    let sortedfiles = []

                    allfiles = response.data.map((planet) => {
                        return planet
                    });

                    let j = [];
                    sortedfiles = compare.map((planet) => {
                        return response.data.map((planet2) => {
                            if (planet == planet2.type)
                                j.push(planet2)
                            return planet2

                        });

                    });


                    downloadall = j.map((planet) => {
                        return planet.url

                    });
                    allcourses = j.map((planet) => {
                        return JSON.stringify(planet)
                    });
                    console.log(allcourses.length)
                    if (allcourses.length === 0) {
                        setTabledisplay('none')
                        setSearchloader('')
                        alert.show('sorry no uploads ', {
                            position: 'bottom right',
                        })

                    }
                    else {
                        setFinalfiles(downloadall)



                    }
                    setSearchloader('')
                })
                setTabledisplay('')

            })
    }
    function startmerge() {
        let tempMsg

        PDFProvider.mergeBetweenPDF(finalfiles)
            .then((res) => {

                if (res && res.hasOwnProperty("pdfFile")) {
                    if (res.pdfFile) {
                        if (res.pdfNotMergedList.length !== finalfiles.length) {
                            const fileName = `${props.username}`+' '+`${subject}` + new Date().toISOString().replace(":", "_").replace("T", "_").replace("Z", "") + ".pdf"
                            saveSync(res.pdfFile, fileName)
                        }

                        if (res.pdfNotMergedList.length > 0) {
                            if (res.pdfNotMergedList.length > 0 && res.pdfNotMergedList.length === initialfiles.length) {
                                tempMsg = "No merge PDF output could be done. Following files have problem and need to be merged manually: " + res.pdfNotMergedList.join(", ")
                            } else {
                                tempMsg = "Following files have problem and need to be merged manually: " + res.pdfNotMergedList.join(", ")
                            }



                            setmodalOpen(true)
                            setmodalLoading(false)
                            setmodalMsg({
                                err: tempMsg,
                                success: null
                            })

                        }
                        else {
                            tempMsg = "Merge totally successfull and downloaded!"


                            setmodalOpen(true)
                            setmodalLoading(false)
                            setmodalMsg({
                                err: null,
                                success: tempMsg
                            })


                            alert.success('succesfully downloaded')
                        }
                    }
                } else {
                    tempMsg = "Internal error at merging! Send this error to the developer in charge."


                    modalOpen(true)
                    setmodalLoading(false)
                    setmodalMsg({
                        err: tempMsg,
                        success: null
                    })

                }
            }).catch((err) => {

            })


    }
    if (error) {
        return (
            <div>
                <p>
                    There was a problem accessing your data. Please go login again.
                    <Redirect to={`/Login`} />
                </p>
            </div>
        );
    }
    if (loadingUser !== false) {
        return (
            <div>
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
    let optionsubjects = allsubjects.map((allcourses) =>
        <option disabled={allcourses.Department} value={allcourses.Name} style={{ color: "BLACK" }} >{allcourses.Name}</option>
    );
    let optionfiles = initialfiles.map((allcourses) =>
        <tr>
            <td>{allcourses.type}</td>
            <td>{allcourses.subtype}</td>

            <td onClick={(event) => upadate(allcourses.id)}><UpdateIcon /></td>
            <td><a download="myimage" href={allcourses.url} target="_blank" ><GetAppTwoToneIcon /></a></td>
            <td className=" btn-danger" onClick={(event) => deletefiles(allcourses.id)}><DeleteForeverIcon /></td>
        </tr>
    );
    if (loadingUser === false) {
        return (
            <div>



                <div className="input-group" style={{ display: `${updatedisplay}` }}>
                    <Container component="main" maxWidth="xs" className="card">
                        <div style={{ marginTop: 30 }}></div>
                        <div className="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" accept="image/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.template,application/vnd.ms-word.document.macroEnabled.12,application/vnd.ms-excel,application/vnd.ms-excel.sheet.macroEnabled.12,application/vnd.ms-excel.template.macroEnabled.12,application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.presentationml.template,application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.ms-powerpoint.addin.macroEnabled.12"
                                aria-describedby="inputGroupFileAddon01" onChange={handlefile} />
                            <label id="file" class="custom-file-label" for="inputGroupFile01">{filename}</label>
                        </div>
                        <div style={{ marginBottom: 30 }}></div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={!selectedFile} id="inputGroupFileAddon01" onClick={updateFile}>{updating ? updating : 'Update'}
                        </Button>
                        <div style={{ marginBottom: 10 }}></div>
                        <Button
                            fullWidth

                            variant="contained"
                            color="secondary"
                            onClick={cancel}
                        >Cancel
          </Button>
                        <div style={{ marginBottom: 30 }}></div>
                    </Container>
                </div>

                <div style={{ display: `${searchdisplay}` }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <select className="browser-default custom-select" onChange={searchbysubject}>
                            <option value=''>CHOOSE SUBJECT</option>
                            {optionsubjects}
                        </select>
                        <button className="input-group-text btn-dark" disabled={!subject || searchloader} id="inputGroupFileAddon01" onClick={searchFiles}>{searchloader ? searchloader : "Search"}</button>

                    </div >


                    <table className="table table-hover table-dark table-responsive-xl" style=
                        {{ color: 'white', display: `${tablediplay}` }}>
                        <thead>
                            <tr>
                                <th scope="col">Type</th>
                                <th scope="col">subtype</th>
                                <th scope="col">Update</th>
                                <th scope="col">Download Link</th>
                                <th scope="col">Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {optionfiles}
                            <tr><th colspan="9" className=" btn-primary"><button className="input-group-text  btn-primary" onClick={startmerge}>Download All</button></th></tr>
                        </tbody>
                    </table></div>
            </div>
        )
    }

}
