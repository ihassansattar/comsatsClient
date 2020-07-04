import React, { useState, useEffect } from 'react';
import './common.css'
import axios from 'axios';
import { apiPath } from '../../config';
import { CSVLink } from "react-csv";

const GENERALINFORMAITION = () => {
    const [facultyOffices, setfacultyOffices] = useState()
    const [openAreaForAStudents, setopenAreaForAStudents] = useState([]);
    const [sports, setsports] = useState([]);
    const [hostelFacilit, sethostelFacilit] = useState('');
    const [praying, setpraying] = useState('');
    const [commonRoom, setcommonRoom] = useState()
    const [wifi, setwifi] = useState([]);
    const [socities, setsocities] = useState([]);
    const [yearlyBoard, setyearlyBoard] = useState('');
    const [departMeeting, setdepartMeeting] = useState('');
    const [yearlyCalender, setyearlyCalender] = useState('');
    const [teachingAssitant, setteachingAssitant] = useState()
    const [internshipOffice, setinternshipOffice] = useState([]);
    const [exportsData, setExportsData] = useState([]);

    useEffect(() => {
        axios.get(apiPath + '/findgeneralinformation/1').then(res => {
            console.log(res)
            setExportsData([res.data])
            setfacultyOffices(res.data.facultyOffices)
            setopenAreaForAStudents(res.data.openAreaForAStudents)
            setsports(res.data.sports)
            sethostelFacilit(res.data.hostelFacilit)
            setpraying(res.data.praying)
            setcommonRoom(res.data.commonRoom)
            setwifi(res.data.wifi)
            setsocities(res.data.socities)
            setyearlyBoard(res.data.yearlyBoard)
            setdepartMeeting(res.data.departMeeting)
            setyearlyCalender(res.data.yearlyCalender)
            setteachingAssitant(res.data.teachingAssitant)
            setinternshipOffice(res.data.internshipOffice)
        })
    }, [])
    async function Update() {
        await axios.put(apiPath + '/updategeneralinformation/1', {
            facultyOffices,
            openAreaForAStudents,
            sports,
            hostelFacilit,
            praying,
            commonRoom,
            wifi,
            socities,
            yearlyBoard,
            departMeeting,
            yearlyCalender,
            teachingAssitant,
            internshipOffice,
        }).then(res => {
            console.log(res)
            alert("successfully Updated")
            window.location.reload()

        })
    }
    return (
        <div class="page-wrapper p-t-100 p-b-50">
            <div class="wrapper wrapper--w900">
                <div class="card card-6">
                    <div id='printMe'>
                        <div class="card-heading" style={{ backgroundColor: "gray" }}>
                            <h2 class="title">General Information Form</h2>
                        </div>
                        <div class="card-body">
                            <form method="POST" >

                                <div class="form-row">
                                    <div class="name">Number of seperate faculty offices</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="Please write clear answer" value={facultyOffices} disabled onChange={(e) => setfacultyOffices(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Is there any open area for students</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="Please write clear answer" value={openAreaForAStudents} disabled onChange={(e) => setopenAreaForAStudents(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Are there any facilities for outdoor and indoor sports</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="Please write clear answer" value={sports} disabled onChange={(e) => setsports(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Is there In-Campus hostel facility provided by institute</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="Please write clear answer" value={hostelFacilit} disabled onChange={(e) => sethostelFacilit(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Is there facility of adequate and clean praying area</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="please write clear answer" value={praying} disabled onChange={(e) => setpraying(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Is there any adequate common room</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="please write clear answer" value={commonRoom} disabled onChange={(e) => setcommonRoom(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Is there facility of Wi-Fi in campus</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="Please write clear answer" value={wifi} disabled onChange={(e) => setwifi(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Are there any socities in campus for extracurricular activities</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="Please write clear answer" value={socities} disabled onChange={(e) => setsocities(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Is there any yearly board of studies meeting</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="Please write cleaar answer" value={yearlyBoard} disabled onChange={(e) => setyearlyBoard(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Are there any departmental meetings per semister</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="Please write clear answer" value={departMeeting} disabled onChange={(e) => setdepartMeeting(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Does yearly calener exist and is followed</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="Please write clear answer" value={yearlyCalender} disabled onChange={(e) => setyearlyCalender(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Is teaching assistant support provided to faculty</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="Please write clear answer" value={teachingAssitant} disabled onChange={(e) => setteachingAssitant(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Is Placemint and internship office being established in campus</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" placeholder="Please write clear answer" value={internshipOffice} disabled onChange={(e) => setinternshipOffice(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div class="card-footer">
                        {exportsData && <button class="btn btn-success btn-block" style={{ color: 'white' }}><CSVLink style={{ color: 'white' }} data={exportsData && exportsData} target="_blank"
                            filename={"generalInformationForm.csv"}>Export</CSVLink></button>}
                        <button class="btn btn-success btn-block" onClick={() => {
                            var printContents = document.getElementById('printMe').innerHTML;
                            var originalContents = document.body.innerHTML;
                            document.body.innerHTML = printContents;
                            window.print();
                            document.body.innerHTML = originalContents;
                            window.location.reload()
                        }}>Print</button>
                        <button class="btn btn-danger btn-block" onClick={() => window.location.reload()}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GENERALINFORMAITION;
