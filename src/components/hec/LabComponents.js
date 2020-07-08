import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { apiPath } from '../../config'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';
import PDFProvider from '../teachers/pdfProvider'
import { saveSync } from 'save-file'
import { useAlert } from 'react-alert'

import Container from '@material-ui/core/Container';
import { MDBDataTable } from 'mdbreact';
import { Redirect } from 'react-router-dom';
export default function CourseUpload(props) {
    const alert = useAlert()
    const [modalOpen, setmodalOpen] = useState(false)

    const [finalfiles, setFinalfiles] = useState()
    const [initialfiles, setInitialFiles] = useState([]);
    const [allsubjects, setAllsubjects] = useState([]);
    const [subject, setSubject] = useState('');
    const [loadingUser, setLoadingUser] = useState(false);
    const [error, setError] = useState(false);
    const [compare, setCompare] = useState()
    const [tablediplay, setTabledisplay] = useState('none')
    const [searchloader, setSearchloader] = useState(null)
    const [searchBackup, setSearchBackup] = useState(null)
    const [users, setusers] = useState([])
    const [filesChecker,setFilesChecker]=useState(false)
    const data = {
        columns: [
            {
                label: 'User Name',
                field: 'name',
                sort: 'asc',
            },
            
            {
                label: 'Type',
                field: 'type',
            },
            {
                label: 'Sub Type',
                field: 'subtype',
            },
            {
                label: 'Download',
                field: 'download',
            },

        ],
        rows: []
    };
    useEffect(() => {
        setLoadingUser(true)
        async function loadsubjects() {

            {
                await axios.get(apiPath + '/findallteachers').then(users=>{
                    console.log(users)
                    setusers(users.data)
                 })
                const subjects = await axios.get(apiPath + '/labsubjects')
                const coursecomponent = await axios.get(apiPath + '/findlabcomponents')
                axios.all([subjects, coursecomponent]).then(axios.spread((...responses) => {
                    setAllsubjects(responses[0].data)
                    setCompare(responses[1].data.map((planet) => {
                        return planet.Type
                    }))
                    setLoadingUser(false)
                })).catch(errors => {
                })
            }
        }
        loadsubjects()
    }, [])
    function searchFiles() {
        setSearchloader('searching...')
        axios.get(apiPath + `/findlabfilesbysubject/${subject}`).then(response => {
            setInitialFiles(response.data)
            setSearchBackup(response.data)
            setFilesChecker(true)
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
                alert.show(' Sorry no uploads', {
                    position: 'bottom right',
                })
            }
            else {
                setFinalfiles(downloadall)
            }
            setSearchloader('')
        })
        setTabledisplay('')

    }
    function searchbysubject(e) {
        if (e.target.value) {
            setSubject(e.target.value)
        }

    }
    function filterByTeacher(e){
        if (e.target.value) {
            console.log(e.target.value)
            setInitialFiles(searchBackup.filter(sin=>sin.username===e.target.value))
        }else{
            setInitialFiles([...searchBackup])
        }
    }
    function startmerge() {
        let tempMsg
        PDFProvider.mergeBetweenPDF(finalfiles)
            .then((res) => {
                if (res && res.hasOwnProperty("pdfFile")) {
                    if (res.pdfFile) {
                        if (res.pdfNotMergedList.length !== finalfiles.length) {
                            const fileName = "output_merge_" + new Date().toISOString().replace(":", "_").replace("T", "_").replace("Z", "") + ".pdf"
                            saveSync(res.pdfFile, fileName)
                        }

                        if (res.pdfNotMergedList.length > 0) {
                            if (res.pdfNotMergedList.length > 0 && res.pdfNotMergedList.length === initialfiles.length) {
                                tempMsg = "No merge PDF output could be done. Following files have problem and need to be merged manually: " + res.pdfNotMergedList.join(", ")
                            } else {
                                tempMsg = "Following files have problem and need to be merged manually: " + res.pdfNotMergedList.join(", ")
                            }
                            setmodalOpen(true)


                        }
                        else {
                            tempMsg = "Merge totally successfull and downloaded!"
                            setmodalOpen(true)
                            alert.success('succesfully downloaded')
                        }
                    }
                } else {
                    tempMsg = "Internal error at merging! Send this error to the developer in charge."
                    modalOpen(true)

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
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
    let optionsubjects = allsubjects.map((allcourses) =>
        <option disabled={allcourses.Department} value={allcourses.Name} style={{ color: "BLACK" }} >{allcourses.Name}</option>
    );
    let user = users.map((Users) =>
    <option  value={Users.name} >{Users.username}</option>
);
    let files = initialfiles.map((allcourses) => {
        data.rows.push(
            {
                name: allcourses.username,
                type: allcourses.type,
                subtype: allcourses.subtype,
                download: <a download="myimage" href={allcourses.url} target="_blank" ><GetAppTwoToneIcon /></a>
            }
        )
    })

    if (loadingUser === false) {
        return (

            <div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <select className="browser-default custom-select" onChange={searchbysubject}>
                        <option value=''>CHOOSE SUBJECT</option>
                        {optionsubjects}
                    </select>
                    <button className="input-group-text  btn-dark" disabled={!subject || searchloader} id="inputGroupFileAddon01" onClick={searchFiles}>{searchloader ? searchloader : 'search'}</button>
                </div >
                {filesChecker&&<select className="browser-default custom-select" style={{color:'black'}} onChange={filterByTeacher}>
                        <option value=''>CHOOSE TEACHER</option>
                        {user}
                    </select>}
                <Container component="main" maxWidth="s" className="card">
                    <div className="table-hover" style=
                        {{ display: `${tablediplay}` }}>
                        <MDBDataTable
                            responsiveLg
                            data={data}
                            btn={true}
                        />
                        <button className="input-group-text  btn-primary" style={{ marginBottom: 10 }} onClick={startmerge}>Download All</button>
                    </div>
                </Container>
            </div>
        )
    }
}
