import React, { useState, useEffect } from 'react';
import './common.css'
import axios from 'axios';
import { apiPath } from '../../config';
import { CSVLink } from "react-csv";
const BSPROGRAMDETAILS = () => {
    const [admissionPolicy, setadmissionPolicy] = useState()
    const [admissionCriteria, setadmissionCriteria] = useState([]);
    const [programObjectivesAchived, setprogramObjectivesAchived] = useState([]);
    const [programFrequentlyRevised, setprogramFrequentlyRevised] = useState('');
    const [problemSolvingSkillsDevelopedByProgram, setproblemSolvingSkillsDevelopedByProgram] = useState('');
    const [technologiesExposedToStudents, settechnologiesExposedToStudents] = useState()
    const [assismentStandardOfInstitute, setassismentStandardOfInstitute] = useState([]);
    const [existingIndusterialTrends, setexistingIndusterialTrends] = useState([]);
    const [studentsTrainedIn, setstudentsTrainedIn] = useState('');
    const [programGoals, setprogramGoals] = useState('');
    const [totalStudents1, settotalStudents1] = useState('');
    const [totalSections1, settotalSections1] = useState()
    const [averageStudents1, setaverageStudents1] = useState([]);
    const [totalStudents2, settotalStudents2] = useState('');
    const [totalSections2, settotalSections2] = useState()
    const [averageStudents2, setaverageStudents2] = useState([]);
    const [totalStudents3, settotalStudents3] = useState('');
    const [totalSections3, settotalSections3] = useState()
    const [averageStudents3, setaverageStudents3] = useState([]);
    const [totalStudents4, settotalStudents4] = useState('');
    const [totalSections4, settotalSections4] = useState()
    const [averageStudents4, setaverageStudents4] = useState([]);
    const [totalStudents5, settotalStudents5] = useState('');
    const [totalSections5, settotalSections5] = useState()
    const [averageStudents5, setaverageStudents5] = useState([]);
    const [exportsData, setExportsData] = useState([]);
    useEffect(() => {
        axios.get(apiPath + '/findprogramminformation/1').then(res => {
            setExportsData([res.data])
            setadmissionPolicy(res.data.admissionPolicy)
            setadmissionCriteria(res.data.admissionCriteria)
            setprogramObjectivesAchived(res.data.programObjectivesAchived)
            setprogramFrequentlyRevised(res.data.programFrequentlyRevised)
            setproblemSolvingSkillsDevelopedByProgram(res.data.problemSolvingSkillsDevelopedByProgram)
            settechnologiesExposedToStudents(res.data.technologiesExposedToStudents)
            setassismentStandardOfInstitute(res.data.assismentStandardOfInstitute)
            setexistingIndusterialTrends(res.data.existingIndusterialTrends)
            setstudentsTrainedIn(res.data.studentsTrainedIn)
            setprogramGoals(res.data.programGoals)
            settotalStudents1(res.data.totalStudents1)
            settotalSections1(res.data.totalSections1)
            setaverageStudents1(res.data.averageStudents1)
            settotalStudents2(res.data.totalStudents2)
            settotalSections2(res.data.totalSections2)
            setaverageStudents2(res.data.averageStudents2)
            settotalStudents3(res.data.totalStudents3)
            settotalSections3(res.data.totalSections3)
            setaverageStudents3(res.data.averageStudents3)
            settotalStudents4(res.data.totalStudents4)
            settotalSections4(res.data.totalSections4)
            setaverageStudents4(res.data.averageStudents4)
            settotalStudents5(res.data.totalStudents5)
            settotalSections5(res.data.totalSections5)
            setaverageStudents5(res.data.averageStudents5)
        })
    }, [])
    async function update() {
        await axios.put(apiPath + '/updateprogramminformation/1', {
            admissionPolicy,
            admissionCriteria,
            programObjectivesAchived,
            programFrequentlyRevised,
            problemSolvingSkillsDevelopedByProgram,
            technologiesExposedToStudents,
            assismentStandardOfInstitute,
            existingIndusterialTrends,
            studentsTrainedIn,
            programGoals,
            totalStudents1,
            totalSections1,
            averageStudents1,
            totalStudents2,
            totalSections2,
            averageStudents2,
            totalStudents3,
            totalSections3,
            averageStudents3,
            totalStudents4,
            totalSections4,
            averageStudents4,
            totalStudents5,
            totalSections5,
            averageStudents5,
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
                        <h2 class="title">Program Information Form</h2>
                    </div>
                    <div class="card-body">
                        <form method="POST">

                            <div class="form-row">
                                <div class="name">Admission eligibility policy</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="Providing admission eligibility policy rearding program under evalution" value={admissionPolicy} onChange={(e) => setadmissionPolicy(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Admission Criteria</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="Minimum 50% Marks and Mathematics in intermediate is required according to HEC" value={admissionCriteria} onChange={(e) => setadmissionCriteria(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">How for have the objective of the program been achieved</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="Please clear answer" value={programObjectivesAchived} onChange={(e) => setprogramObjectivesAchived(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">How Frequently is the program reviewed and revised</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="what is the process and procedure" value={programFrequentlyRevised} onChange={(e) => setprogramFrequentlyRevised(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Please Provide the summary Of Problem Solving skills developed by the program</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="please write clear answer" value={problemSolvingSkillsDevelopedByProgram} onChange={(e) => setproblemSolvingSkillsDevelopedByProgram(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Please Provide a summary of the technologies exposed to students</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="please write clear answer" value={technologiesExposedToStudents} onChange={(e) => settechnologiesExposedToStudents(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Please list down the assisment standards of the institute</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="please provide clear answer" value={assismentStandardOfInstitute} onChange={(e) => setassismentStandardOfInstitute(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">How far does the program correlate with existing industrial trends</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="Give Details" value={existingIndusterialTrends} onChange={(e) => setexistingIndusterialTrends(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Which emerging technologies do you train your students in</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="Please write cleaar answer" value={studentsTrainedIn} onChange={(e) => setstudentsTrainedIn(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Program Goals</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="Please write clear answer" value={programGoals} onChange={(e) => setprogramGoals(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <h1 className="heading6-of-header fnt-poppins">Section Info. For the Year {new Date().getFullYear() - 1}</h1>

                            <div class="form-row">
                                <div class="name">Total Number of students</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={totalStudents1} onChange={(e) => settotalStudents1(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Total Number of sections</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={totalSections1} onChange={(e) => settotalSections1(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Average Number of students per section</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={averageStudents1} onChange={(e) => setaverageStudents1(e.target.value)} />
                                </div>
                            </div>

                            <h1 className="heading6-of-header fnt-poppins">Section Info. For the Year {new Date().getFullYear() - 2}</h1>

                            <div class="form-row">
                                <div class="name">Total Number of students</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={totalStudents2} onChange={(e) => settotalStudents2(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Total Number of sections</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={totalSections2} onChange={(e) => settotalSections2(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Average Number of students per section</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={averageStudents2} onChange={(e) => setaverageStudents2(e.target.value)} />
                                </div>
                            </div>

                            <h1 className="heading6-of-header fnt-poppins">Section Info. For the Year {new Date().getFullYear() - 3}</h1>

                            <div class="form-row">
                                <div class="name">Total Number of students</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={totalStudents3} onChange={(e) => settotalStudents3(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Total Number of sections</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={totalSections3} onChange={(e) => settotalSections3(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Average Number of students per section</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={averageStudents3} onChange={(e) => setaverageStudents3(e.target.value)} />
                                </div>
                            </div>

                            <h1 className="heading6-of-header fnt-poppins">Section Info. For the Year {new Date().getFullYear() - 4}</h1>

                            <div class="form-row">
                                <div class="name">Total Number of students</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={totalStudents4} onChange={(e) => settotalStudents4(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Total Number of sections</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={totalSections4} onChange={(e) => settotalSections4(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Average Number of students per section</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={averageStudents4} onChange={(e) => setaverageStudents4(e.target.value)} />
                                </div>
                            </div>

                            <h1 className="heading6-of-header fnt-poppins">Section Info. For the Year {new Date().getFullYear() - 5}</h1>

                            <div class="form-row">
                                <div class="name">Total Number of students</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={totalStudents5} onChange={(e) => settotalStudents5(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Total Number of sections</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={totalSections5} onChange={(e) => settotalSections5(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Average Number of students per section</div>
                                <div class="value">
                                    <input class="input--style-6" type="number" name="full_name" value={averageStudents5} onChange={(e) => setaverageStudents5(e.target.value)} />
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-success btn-block" onClick={update}>Update</button>
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
export default BSPROGRAMDETAILS;
