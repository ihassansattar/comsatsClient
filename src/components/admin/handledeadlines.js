import React, { useState, useEffect } from 'react';
import './common.css'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';
import { apiPath } from '../../config'
const Deadlines = () => {
    const [toggles, settoggles] = useState([]);
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
    const [loadingUser, setLoadingUser] = useState(false);
    const [labComponents, setlabcomponents] = useState([])
    const [totalSharedRooms, settotalSharedRooms] = useState(true);
    const [nameHandler, setHandler] = useState('');
    const [heading, setheading] = useState('')
    const [onoffToggle, setOnOfToggle] = useState()
    const [loader, setloader] = useState(false)
    useEffect(() => {

    }, [])

    function deadline(e, id) {
        if (e.target.value === '') {
            if (nameHandler === 'findcoursecomponents') {

                axios.put(apiPath + '/updatecoursecomponents/' + id,
                    {
                        display: "disabled"
                    }
                ).then(res => {
                    console.log(res)
                })
            }
            else if (nameHandler === 'findgradeexams') {
                axios.put(apiPath + '/updategradeexams/' + id,
                    {
                        display: "disabled"
                    }
                ).then(res => {
                    console.log(res)
                })
            }
            else if (nameHandler === 'findgradeassinments') {
                axios.put(apiPath + '/updategradeassinments/' + id,
                    {
                        display: "disabled"
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findselectquizes') {
                axios.put(apiPath + '/updateselectquizes/' + id,
                    {
                        display: "disabled"
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findselectexams') {
                axios.put(apiPath + '/updateselectexams/' + id,
                    {
                        display: "disabled"
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findselectno') {
                axios.put(apiPath + '/updateselectno/' + id,
                    {
                        display: "disabled"
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findselectgrades') {
                axios.put(apiPath + '/updateselectgrades/' + id,
                    {
                        display: "disabled"
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findgradequizes') {
                axios.put(apiPath + '/updategradequizes/' + id,
                    {
                        display: "disabled"
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findselectassinments') {
                axios.put(apiPath + '/updateselectassinments/' + id,
                    {
                        display: "disabled"
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findlabcomponents') {
                axios.put(apiPath + '/updatelabcomponents/' + id,
                    {
                        display: "disabled"
                    }
                ).then(res => {
                    console.log(res)
                })
            }
            else if (nameHandler === 'dashboard') {
                axios.put(apiPath + '/updatecoursecomponents/' + id,
                    {
                        display: "disabled"
                    }
                ).then(res => {
                    console.log(res)
                })
            }
        }
        else {
            if (nameHandler === 'findcoursecomponents') {

                axios.put(apiPath + '/updatecoursecomponents/' + id,
                    {
                        display: ""
                    }
                ).then(res => {
                    console.log(res)
                })
            }
            else if (nameHandler === 'findgradeexams') {
                axios.put(apiPath + '/updategradeexams/' + id,
                    {
                        display: ""
                    }
                ).then(res => {
                    console.log(res)
                })
            }
            else if (nameHandler === 'findgradeassinments') {
                axios.put(apiPath + '/updategradeassinments/' + id,
                    {
                        display: ""
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findselectquizes') {
                axios.put(apiPath + '/updateselectquizes/' + id,
                    {
                        display: ""
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findselectexams') {
                axios.put(apiPath + '/updateselectexams/' + id,
                    {
                        display: ""
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findselectno') {
                axios.put(apiPath + '/updateselectno/' + id,
                    {
                        display: ""
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findselectgrades') {
                axios.put(apiPath + '/updateselectgrades/' + id,
                    {
                        display: ""
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findgradequizes') {
                axios.put(apiPath + '/updategradequizes/' + id,
                    {
                        display: ""
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findselectassinments') {
                axios.put(apiPath + '/updateselectassinments/' + id,
                    {
                        display: ""
                    }
                ).then(res => {
                    console.log(res)
                })

            }
            else if (nameHandler === 'findlabcomponents') {
                axios.put(apiPath + '/updatelabcomponents/' + id,
                    {
                        display: ""
                    }
                ).then(res => {
                    console.log(res)
                })
            }
            else if (nameHandler === 'dashboard') {
                axios.put(apiPath + '/updatecoursecomponents/' + id,
                    {
                        display: ""
                    }
                ).then(res => {
                    console.log(res)
                })
            }
        }

    }
    async function fetchdata(e) {

        setHandler(e.target.value)
        if (e.target.value === 'findcoursecomponents') {
            setheading('Course Components Deadlines')
        }
        else if (e.target.value === 'findgradeexams') {
            setheading('Deadlines of Grade Exams')

        }
        else if (e.target.value === 'findgradeassinments') {
            setheading('Deadlines of Grade Assinments')

        }
        else if (e.target.value === 'findselectquizes') {
            setheading('Deadlines of Quizes')

        }
        else if (e.target.value === 'findselectexams') {
            setheading('Deadlines of Exams')

        }
        else if (e.target.value === 'findselectno') {
            setheading('Deadlines of Lecture No')

        }
        else if (e.target.value === 'findselectgrades') {
            setheading('Deadlines of Lecture grades')

        }
        else if (e.target.value === 'findgradequizes') {
            setheading('Deadlines of Grade Quizes')

        }
        else if (e.target.value === 'findselectassinments') {
            setheading('Deadlines of Assinments')

        }
        else if (e.target.value === 'findlabcomponents') {
            setheading('Deadlines of Lab Components')
        }
        else if (e.target.value === 'dashboard') {
            setheading('Message To Display On Teachers Dashboard')
        }
        settoggles([])
        await axios.get(apiPath + '/' + e.target.value).then(res => {
            settoggles(res.data)
        })

    }
    let toggle;
    if (nameHandler === 'findselectexams' || nameHandler === 'findgradeexams' || nameHandler === 'findselectgrades') {
        toggle = toggles.map((courses) =>
            <div class="form-row">
                <div class="name">{courses.name}</div>
                <div class="value">
                    <FormControlLabel
                        control={<Switch size="large" defaultChecked={courses.display} value={courses.display} onChange={(e) => { deadline(e, courses.id) }} />}
                    />
                </div>
            </div>);
    }
    else if (nameHandler === 'findcoursecomponents' || nameHandler === 'findlabcomponents') {
        toggle = toggles.map((courses) =>
            <div class="form-row">
                <div class="name">{courses.Type}</div>
                <div class="value">
                    <FormControlLabel
                        control={<Switch size="large" defaultChecked={courses.display} value={courses.display} onChange={(e) => { deadline(e, courses.id) }} />}
                    />
                </div>
            </div>
        );
    }
    else {
        toggle = toggles.map((courses) =>
            <div class="form-row">
                <div class="name">{courses.no}</div>
                <div class="value">
                    <FormControlLabel
                        control={<Switch size="large" defaultChecked={courses.display} value={courses.display} onChange={(e) => { deadline(e, courses.id) }} />}
                    />
                </div>
            </div>
        );
    }





    return (
        <div class="page-wrapper p-t-100 p-b-50">
            <div class="wrapper wrapper--w900">
                <div class="card card-5">
                    <select className="browser-default custom-select pro" onChange={fetchdata}>
                        <option value=''>Handle Deadlines For</option>
                        <option value='findcoursecomponents'>Cours Components</option>
                        <option value='findlabcomponents'>LabComponents</option>
                        <option value='findselectassinments'>Assinments</option>
                        <option value='findselectquizes'>Quizes</option>
                        <option value='findselectexams'>Exams</option>
                        <option value='findselectno'>Leacture no</option>
                        <option value='findgradeassinments'>Grdes of Assinments</option>
                        <option value='findgradequizes'>Grdes of Quizes</option>
                        <option value='findgradeexams'>Grdes of Exams</option>
                        <option value='findselectgrades'>Grades</option>
                    </select>
                    <div class="card-body">
                        <form method="POST">
                            
                                {heading}
                                
                            
                            {toggle}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Deadlines;
