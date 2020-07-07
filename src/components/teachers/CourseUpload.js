import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { apiPath } from '../../config'
import Container from '@material-ui/core/Container';
import { useAlert } from 'react-alert'
const CourseUpload = (props) => {

    const alert = useAlert()
    const [allsubjects, setAllsubjects] = useState([]);
    const [coursecomponents, setCoursecomponents] = useState([]);
    const [gradeassinments, setGradeassinments] = useState([])
    const [gradeexams, setGradeexams] = useState([])
    const [gradequizs, setGradequizs] = useState([])
    const [selectassinments, setSelectassinments] = useState([])
    const [selectexams, setSelectexams] = useState([])
    const [selectgrades, setSelectgrades] = useState([])
    const [selectno, setSelectno] = useState([])
    const [selectquizs, setSelectquizs] = useState([])
    const [Type, setType] = useState('')
    const [SubType, setSubType] = useState('')
    const [Typehandler, setTypehandle] = useState('')
    const [componentsdisplay, setComponentsdisplay] = useState('none')
    const [gradeassinmentsdisplay, setGradeassinmentsdisplay] = useState('none')
    const [gradeexamsdisplay, setGradeexamsdisplay] = useState('none')
    const [gradequizsdisplay, setGradequizsdisplay] = useState('none')
    const [selectassinmentsdisplay, setSelectassinmentsdisplay] = useState('none')
    const [selectexamsdisplay, setSelectexamsdisplay] = useState('none')
    const [selectgradesdisplay, setSelectgradesdisplay] = useState('none')
    const [selectnodisplay, setSelectnodisplay] = useState('none')
    const [selectquizsdisplay, setSelectquizsdisplay] = useState('none')
    const [subject, setSubject] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [loaded, setLoaded] = useState(0);
    const [username, setUsername] = useState('');
    const [loadingUser, setLoadingUser] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [error, setError] = useState(false);
    const [filename, setFilename] = useState("chose file")
    const [uploading, setuploaading] = useState('')
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
                const gradeexam = await axios.get(apiPath + '/findgradeexams')
                const gradeassinment = await axios.get(apiPath + '/findgradeassinments')

                const selectquiz = await axios.get(apiPath + '/findselectquizes')
                const selectexam = await axios.get(apiPath + '/findselectexams')
                const selectno = await axios.get(apiPath + '/findselectno')
                const grade = await axios.get(apiPath + '/findselectgrades')
                const gradequiz = await axios.get(apiPath + '/findgradequizes')
                const selectassinment = await axios.get(apiPath + '/findselectassinments')



                axios.all([user, subjects, coursecomponent, gradeexam, gradeassinment, selectquiz, selectexam, selectno, grade, gradequiz, selectassinment]).then(axios.spread((...responses) => {
                    setUsername(responses[0].data.username)
                    // setAllsubjects(responses[1].data)
                    setCoursecomponents(responses[2].data)
                    setGradeexams(responses[3].data)
                    setGradeassinments(responses[4].data)
                    setSelectquizs(responses[5].data)
                    setSelectexams(responses[6].data)
                    setSelectno(responses[7].data)
                    setSelectgrades(responses[8].data)
                    setGradequizs(responses[9].data)
                    setSelectassinments(responses[10].data)

                    setLoadingUser(false)
                    console.log(responses[8].data)
                    // use/access the results 
                })).catch(errors => {
                    // react on errors.
                })
            }
        }
        checkcredentials()
    }, [])

    function handlesubjects(e) {
        if (e.target.value === '') {
            setGradeassinmentsdisplay('none')
            setGradeexamsdisplay('none')
            setGradequizsdisplay('none')
            setSelectassinmentsdisplay('none')
            setSelectexamsdisplay('none')
            setSelectgradesdisplay('none')
            setSelectnodisplay('none')
            setSelectquizsdisplay('none')
            setComponentsdisplay('none')
        }
        else {
            setComponentsdisplay('block')
            setSubject(e.target.value)
            console.log(subject)
        }
    }

    const handleComponents = (e) => {
        if (e.target.value === '') {
            setGradeassinmentsdisplay('none')
            setGradeexamsdisplay('none')
            setGradequizsdisplay('none')
            setSelectassinmentsdisplay('none')
            setSelectexamsdisplay('none')
            setSelectgradesdisplay('none')
            setSelectnodisplay('none')
            setSelectquizsdisplay('none')
        }
        else {
            axios.get(apiPath + `/findcoursecomponents/${e.target.value}`)
                .then(response => {
                    let Type
                    let SubType
                    Type = response.data[0].Type
                    SubType = response.data[0].SubType
                    if (SubType === 'no') {

                        setType(Type)
                        setSubType('null')
                        setGradeassinmentsdisplay('none')
                        setGradeexamsdisplay('none')
                        setGradequizsdisplay('none')
                        setSelectassinmentsdisplay('none')
                        setSelectexamsdisplay('none')
                        setSelectgradesdisplay('none')
                        setSelectnodisplay('none')
                        setSelectquizsdisplay('none')
                    }
                    else if (SubType === 'assinment') {
                        setSubType('')
                        setType(Type)
                        setSelectassinmentsdisplay('block')
                        setGradeassinmentsdisplay('none')
                        setGradeexamsdisplay('none')
                        setGradequizsdisplay('none')
                        setSelectexamsdisplay('none')
                        setSelectgradesdisplay('none')
                        setSelectnodisplay('none')
                        setSelectquizsdisplay('none')
                    }

                    else if (SubType === 'quiz') {
                        setSubType('')
                        setType(Type)
                        setSelectquizsdisplay('block')
                        setGradeassinmentsdisplay('none')
                        setGradeexamsdisplay('none')
                        setGradequizsdisplay('none')
                        setSelectassinmentsdisplay('none')
                        setSelectexamsdisplay('none')
                        setSelectgradesdisplay('none')
                        setSelectnodisplay('none')

                    }
                    else if (SubType === 'exam') {
                        setSubType('')
                        setType(Type)
                        setSelectexamsdisplay('block')
                        setGradeassinmentsdisplay('none')
                        setGradeexamsdisplay('none')
                        setGradequizsdisplay('none')
                        setSelectassinmentsdisplay('none')

                        setSelectgradesdisplay('none')
                        setSelectnodisplay('none')
                        setSelectquizsdisplay('none')
                    }

                    else if (SubType === 'number') {
                        setSubType('')
                        setType(Type)
                        setSelectnodisplay('block')
                        setGradeassinmentsdisplay('none')
                        setGradeexamsdisplay('none')
                        setGradequizsdisplay('none')
                        setSelectassinmentsdisplay('none')
                        setSelectexamsdisplay('none')
                        setSelectgradesdisplay('none')
                        setSelectquizsdisplay('none')
                    }
                    else if (SubType === 'gradeexam') {
                        setType(Type)
                        setSubType('')
                        setGradeexamsdisplay('block')
                        setGradeassinmentsdisplay('none')
                        setGradequizsdisplay('none')
                        setSelectassinmentsdisplay('none')
                        setSelectexamsdisplay('none')
                        setSelectgradesdisplay('none')
                        setSelectnodisplay('none')
                        setSelectquizsdisplay('none')
                    }

                    else if (SubType === 'gradequiz') {
                        setType(Type)
                        setGradequizsdisplay('block')
                        setGradeassinmentsdisplay('none')
                        setGradeexamsdisplay('none')
                        setSelectassinmentsdisplay('none')
                        setSelectexamsdisplay('none')
                        setSelectgradesdisplay('none')
                        setSelectnodisplay('none')
                        setSelectquizsdisplay('none')
                    }
                    else if (SubType === 'gradeassinment') {
                        setType(Type)
                        setGradeassinmentsdisplay('block')
                        setGradeexamsdisplay('none')
                        setGradequizsdisplay('none')
                        setSelectassinmentsdisplay('none')
                        setSelectexamsdisplay('none')
                        setSelectgradesdisplay('none')
                        setSelectnodisplay('none')
                        setSelectquizsdisplay('none')
                    }
                    //console.log(Type)
                    //   console.log(SubType)


                })
        }
    }
    const handleGradeassinments = (e) => {
        setSubType('')
        setTypehandle('Assinment No' + e.target.value)
        setSelectgradesdisplay('block')
        console.log(Typehandler)
    }
    const handleGradequizs = (e) => {
        setSubType('')
        setTypehandle('Quiz No' + e.target.value)
        setSelectgradesdisplay('block')


    }
    const handleGradeexams = (e) => {
        setTypehandle(e.target.value)
        setSubType('')
        setSelectgradesdisplay('block')

    }
    const handleSelectassinments = (e) => {
        if (e.target.value === '') {
            setSubType('')
        }
        else {
            setSubType('Assinment No' + e.target.value)
        }
    }
    const handleSelectquizes = (e) => {
        if (e.target.value === '') {
            setSubType('')
        }
        else {
            setSubType('Quiz No' + e.target.value)
        }
    }
    const handleSelectexams = (e) => {
        if (e.target.value === '') {
            setSubType('')
        }
        else {
            setSubType(e.target.value)
        }
    }
    const handleSelectno = (e) => {
        if (e.target.value === '') {
            setSubType('')
        }
        else {
            setSubType('Lecture No' + e.target.value)
        }
    }
    const handleGrades = (e) => {
        if (e.target.value === '') {
            setSubType('')
        }
        setSubType(Typehandler + ' ' + e.target.value + ' marks')
        console.log(e.target.value)
    }


    const handlefile = (e) => {
        var file = e.target.files[0];
        console.log(file)

        if (e.target.files[0]) {
            setFilename(file.name)
        }
        setSelectedFile(file)
        setLoaded(0)
    }
    function uploadFile() {
        setuploaading('Uploading...')
        axios.get(apiPath + `/checkcoursefiles/${username}/${subject}/${Type}/${SubType}/${filename}`)
            .then(response => {
                let allcourses = []

                allcourses = response.data.map((planet) => {
                    return JSON.stringify(planet)
                });
                if (allcourses != '') {
                    var txt;
                    if (window.confirm("File Already exist with same name if you want to update previous one press ok and cancel to chose another file")) {
                        const data = new FormData()
                        data.append('file', selectedFile)
                        data.append('id', response.data[0].id)
                        axios.put(apiPath + "/updatecoursefiles", data, {
                            onUploadProgress: ProgressEvent => {

                                setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100)

                            },
                        }).then(res => { // then print response status
                            alert.success(res.data)
                            setuploaading('')
                            setSelectedFile('')
                            setFilename('chose file')
                            setSubject('')
                            setType('')
                            setSubType('')
                            setGradeassinmentsdisplay('none')
                            setGradeexamsdisplay('none')
                            setGradequizsdisplay('none')
                            setSelectassinmentsdisplay('none')
                            setSelectexamsdisplay('none')
                            setSelectgradesdisplay('none')
                            setSelectnodisplay('none')
                            setSelectquizsdisplay('none')
                            setComponentsdisplay('none')
                            document.getElementById("subjectsoption").value = "";
                            document.getElementById("coursoption").value = "";
                            document.getElementById("lectureoptions").value = "";
                            document.getElementById("assinmentoptions").value = "";
                            document.getElementById("examsoption").value = "";
                            document.getElementById("quizoption").value = "";
                            document.getElementById("graddeassinmentoption").value = "";
                            document.getElementById("graddeexamoption").value = "";
                            document.getElementById("graddequizoption").value = "";
                            document.getElementById("selectgradeoption").value = "";
                        })
                            .catch(err => { // then print response status

                                alert.error("failded to update")
                                setuploaading('')
                                setSelectedFile('')
                                setFilename('chose file')
                                setSubject('')
                                setType('')
                                setSubType('')
                                setGradeassinmentsdisplay('none')
                                setGradeexamsdisplay('none')
                                setGradequizsdisplay('none')
                                setSelectassinmentsdisplay('none')
                                setSelectexamsdisplay('none')
                                setSelectgradesdisplay('none')
                                setSelectnodisplay('none')
                                setSelectquizsdisplay('none')
                                setComponentsdisplay('none')
                                document.getElementById("subjectsoption").value = "";
                                document.getElementById("coursoption").value = "";
                                document.getElementById("lectureoptions").value = "";
                                document.getElementById("assinmentoptions").value = "";
                                document.getElementById("examsoption").value = "";
                                document.getElementById("quizoption").value = "";
                                document.getElementById("graddeassinmentoption").value = "";
                                document.getElementById("graddeexamoption").value = "";
                                document.getElementById("graddequizoption").value = "";
                                document.getElementById("selectgradeoption").value = "";

                            })

                    } else {
                        setuploaading('')
                        txt = "You pressed Cancel!";
                    }

                }



                else {
                    const data = new FormData()
                    data.append('file', selectedFile)
                    data.append('username', username)
                    data.append('subject', subject)
                    data.append('type', Type)
                    data.append('subtype', SubType)



                    axios.post(apiPath + "/uploadcoursefile", data, {
                        onUploadProgress: ProgressEvent => {

                            setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100)

                        },
                    })

                        .then(res => {
                            alert.success(res.data)
                            setuploaading('')
                            setSelectedFile('')
                            setFilename('chose file')
                            setSubject('')
                            setType('')
                            setSubType('')
                            setGradeassinmentsdisplay('none')
                            setGradeexamsdisplay('none')
                            setGradequizsdisplay('none')
                            setSelectassinmentsdisplay('none')
                            setSelectexamsdisplay('none')
                            setSelectgradesdisplay('none')
                            setSelectnodisplay('none')
                            setSelectquizsdisplay('none')
                            setComponentsdisplay('none')
                            document.getElementById("subjectsoption").value = "";
                            document.getElementById("coursoption").value = "";
                            document.getElementById("lectureoptions").value = "";
                            document.getElementById("assinmentoptions").value = "";
                            document.getElementById("examsoption").value = "";
                            document.getElementById("quizoption").value = "";
                            document.getElementById("graddeassinmentoption").value = "";
                            document.getElementById("graddeexamoption").value = "";
                            document.getElementById("graddequizoption").value = "";
                            document.getElementById("selectgradeoption").value = "";
                            // window.location.reload();
                        })
                        .catch(err => { // then print response status
                            alert('server connection error ')
                            window.location.reload();
                        })
                }
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
    if (loadingUser === false && updated === true) {
        return <p>DDD</p>;
    }

    let optionsubjects = allsubjects.map((allcourses) =>
        <option disabled={allcourses.display} value={allcourses.Name} style={{ color: "BLACK" }} >{allcourses.Name}</option>
    );
    let optioncoursecomponents = coursecomponents.map((courses) =>
        <option disabled={courses.display} value={courses.id} style={{ color: courses.display ? "gray" : 'BLACK' }} >{courses.Type}</option>
    );
    let optiongradeassinments = gradeassinments.map((courses) =>
        <option disabled={courses.display} value={courses.no} style={{ color: courses.display ? "gray" : 'BLACK' }} >{courses.no}</option>
    );
    let optiongradeexams = gradeexams.map((courses) =>
        <option disabled={courses.display} value={courses.name} style={{ color: courses.display ? "gray" : 'BLACK' }} >{courses.name}</option>
    );
    let optiongradequizes = gradequizs.map((courses) =>
        <option disabled={courses.display} value={courses.no} style={{ color: courses.display ? "gray" : 'BLACK' }} >{courses.no}</option>
    );
    let optionselectassinments = selectassinments.map((courses) =>
        <option disabled={courses.display} value={courses.no} style={{ color: courses.display ? "gray" : 'BLACK' }} >{courses.no}</option>
    );
    let optionselectexams = selectexams.map((courses) =>
        <option disabled={courses.display} value={courses.name} style={{ color: courses.display ? "gray" : 'BLACK' }} >{courses.name}</option>
    );
    let optionselectgrades = selectgrades.map((courses) =>
        <option disabled={courses.display} value={courses.name} style={{ color: courses.display ? "gray" : 'BLACK' }} >{courses.name}</option>
    );
    let optionselectno = selectno.map((courses) =>
        <option disabled={courses.display} value={courses.no} style={{ color: "BLACK" }} >{courses.no}</option>
    );
    let optionselectquizes = selectquizs.map((courses) =>
        <option disabled={courses.display} value={courses.no} style={{ color: courses.display ? "gray" : 'BLACK' }} >{courses.no}</option>
    );

    if (loadingUser === false) {
        return (<Container component="main" maxWidth="s" className="card">


            <p style={{ marginTop: 20, marginBottom: 20 }}>Upload Course Components Here</p>

            <select className="browser-default custom-select" id="subjectsoption" onChange={handlesubjects}>
                <option value=''>CHOOSE SUBJECT</option>
                {optionsubjects}
            </select>


            <select className="browser-default custom-select pro" id='coursoption' style={{ display: `${componentsdisplay}` }} onChange={handleComponents}>
                <option value=''>CHOOSE COURSE COMPONENT</option>
                {optioncoursecomponents}
            </select>

            <select className="browser-default custom-select pro" id='lectureoptions' style={{ display: `${selectnodisplay}` }} onChange={handleSelectno}>
                <option value=''>CHOOSE LECTURE NO</option>
                {optionselectno}
            </select>
            <select className="browser-default custom-select pro" id='assinmentoptions' style={{ display: `${selectassinmentsdisplay}` }} onChange={handleSelectassinments}>
                <option value=''>CHOOSE ASSINMENT NO</option>
                {optionselectassinments}
            </select>

            <select className="browser-default custom-select pro" id='examsoption' style={{ display: `${selectexamsdisplay}` }} onChange={handleSelectexams}>
                <option value=''>CHOOSE Exams</option>
                {optionselectexams}
            </select>

            <select className="browser-default custom-select pro" id='quizoption' style={{ display: `${selectquizsdisplay}` }} onChange={handleSelectquizes}>
                <option value=''>CHOOSE QUIZ NO</option>
                {optionselectquizes}
            </select>

            <select className="browser-default custom-select pro" id='graddeassinmentoption' style={{ display: `${gradeassinmentsdisplay}` }} onChange={handleGradeassinments}>
                <option value=''>CHOOSE ASSINMENT NO</option>
                {optiongradeassinments}
            </select>




            <select className="browser-default custom-select pro" id='graddeexamoption' style={{ display: `${gradeexamsdisplay}` }} onChange={handleGradeexams}>
                <option value=''>CHOOSE EXAMS</option>
                {optiongradeexams}
            </select>

            <select className="browser-default custom-select pro" id='graddequizoption' style={{ display: `${gradequizsdisplay}` }} onChange={handleGradequizs}>
                <option value=''>CHOOSE  QUIZ NO</option>
                {optiongradequizes}
            </select>

            <select className="browser-default custom-select pro" id='selectgradeoption' style={{ display: `${selectgradesdisplay}` }} onChange={handleGrades}>
                <option value=''>CHOOSE GRADES</option>
                {optionselectgrades}
            </select>
            <div className="input-group">
                <div class="input-group-prepend">
                    <button class="input-group-text btn-primary" disabled={!Type || !selectedFile || !SubType} id="inputGroupFileAddon01" onClick={uploadFile}>{uploading ? uploading : 'Upload'}</button>
                </div>
                <div className="custom-file">
                    <input type="file" class="custom-file-input" id="inputGroupFile01" accept="image/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.template,application/vnd.ms-word.document.macroEnabled.12,application/vnd.ms-excel,application/vnd.ms-excel.sheet.macroEnabled.12,application/vnd.ms-excel.template.macroEnabled.12,application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.presentationml.template,application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.ms-powerpoint.addin.macroEnabled.12"
                        aria-describedby="inputGroupFileAddon01" onChange={handlefile} />
                    <label id="file" class="custom-file-label" for="inputGroupFile01">{filename}</label>
                </div>
            </div>
            <div style={{ marginBottom: 30 }}></div>

        </Container>
        )

    }
}
export default CourseUpload