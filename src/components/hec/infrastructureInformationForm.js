import React, { useState, useEffect } from 'react';
import './common.css'
import axios from 'axios';
import { apiPath } from '../../config';
const GENERALINFORMAITION = () => {
    const [totalDedicatedRooms, settotalDedicatedRooms] = useState()
    const [totalSharedRooms, settotalSharedRooms] = useState([]);
    const [roomsize, setroomsize] = useState([]);
    const [instructionalFacilities, setinstructionalFacilities] = useState('');
    const [otherFacilities, setotherFacilities] = useState('');
    const [totalComputerLabs, settotalComputerLabs] = useState()
    const [averageComputerLabs, setaverageComputerLabs] = useState([]);
    const [pcLifeTime, setpcLifeTime] = useState([]);
    const [totalLabHours, settotalLabHours] = useState('');
    const [networking, setnetworking] = useState('');

    const [specialFacilities, setspecialFacilities] = useState('');
    const [isLogicDesign, setisLogicDesign] = useState()
    const [exclusiveFinalYearLab, setexclusiveFinalYearLab] = useState([]);

    const [studentToComputerRatio1, setstudentToComputerRatio1] = useState([]);
    const [studentToComputerRatio2, setstudentToComputerRatio2] = useState([]);
    const [studentToComputerRatio3, setstudentToComputerRatio3] = useState([]);

    const [totalLibraryBooks, settotalLibraryBooks] = useState([]);
    const [uniqueTitle, setuniqueTitle] = useState([]);
    const [hecDigitalLibrary, sethecDigitalLibrary] = useState([]);
    const [libraryManagementSystem, setlibraryManagementSystem] = useState([]);
    const [ieee, setieee] = useState([]);

    const [booksAdded1, setbooksAdded1] = useState([]);
    const [printedMagzines1, setprintedMagzines1] = useState([]);

    const [booksAdded2, setbooksAdded2] = useState([]);
    const [printedMagzines2, setprintedMagzines2] = useState([]);

    const [booksAdded3, setbooksAdded3] = useState([]);
    const [printedMagzines3, setprintedMagzines3] = useState([]);
    useEffect(() => {
        axios.get(apiPath + '/findinfrastructureinforfation/1').then(res => {
            settotalDedicatedRooms(res.data.totalDedicatedRooms)
            settotalSharedRooms(res.data.totalSharedRooms)
            setroomsize(res.data.roomsize)
            setinstructionalFacilities(res.data.instructionalFacilities)
            setotherFacilities(res.data.otherFacilities)
            settotalComputerLabs(res.data.totalComputerLabs)
            setaverageComputerLabs(res.data.averageComputerLabs)
            setpcLifeTime(res.data.pcLifeTime)
            settotalLabHours(res.data.totalLabHours)
            setnetworking(res.data.networking)
            setspecialFacilities(res.data.specialFacilities)
            setisLogicDesign(res.data.isLogicDesign)
            setexclusiveFinalYearLab(res.data.exclusiveFinalYearLab)
            setstudentToComputerRatio1(res.data.studentToComputerRatio1)
            setstudentToComputerRatio2(res.data.studentToComputerRatio2)
            setstudentToComputerRatio3(res.data.studentToComputerRatio3)
            settotalLibraryBooks(res.data.totalLibraryBooks)
            setuniqueTitle(res.data.uniqueTitle)
            sethecDigitalLibrary(res.data.hecDigitalLibrary)
            setlibraryManagementSystem(res.data.libraryManagementSystem)
            setieee(res.data.ieee)
            setbooksAdded1(res.data.booksAdded1)
            setprintedMagzines1(res.data.printedMagzines1)
            setbooksAdded2(res.data.booksAdded2)
            setprintedMagzines2(res.data.printedMagzines2)
            setbooksAdded3(res.data.booksAdded3)
            setprintedMagzines3(res.data.printedMagzines3)
        })
    }, [])
   async function update(){
    await axios.put(apiPath + '/updateinfrastructureinforfation/1', {
        totalDedicatedRooms,
    totalSharedRooms,
    roomsize,
    instructionalFacilities,
    otherFacilities,
    totalComputerLabs,
    averageComputerLabs,
    pcLifeTime,
    totalLabHours,
    networking,
    specialFacilities,
    isLogicDesign,
    exclusiveFinalYearLab,
    studentToComputerRatio1,
    studentToComputerRatio2,
    studentToComputerRatio3,
    totalLibraryBooks,
    uniqueTitle,
    hecDigitalLibrary,
    libraryManagementSystem,
    ieee,
    booksAdded1,
    printedMagzines1,
    booksAdded2,
    printedMagzines2,
    booksAdded3,
    printedMagzines3,

    }).then(res=>{
        console.log(res)
        alert("successfully Updated")
        window.location.reload()
    })
    }
    return (
        <div class="page-wrapper p-t-100 p-b-50">
            <div class="wrapper wrapper--w900">
                <div class="card card-6">
                    <div class="card-heading" style={{ backgroundColor: "gray" }}>
                        <h2 class="title">Infrastructure Information Form</h2>
                    </div>
                    <div class="card-body">
                        <form method="POST">
                            <p className="heading6-of-header fnt-poppins">Lecture Rooms</p>
                            <div class="form-row">
                                <div class="name">Total Number of Dedicated Lecture Rooms</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="For the Program Under Evaluation" value={totalDedicatedRooms} disabled onChange={(e) => settotalDedicatedRooms(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Total Number of Shared Lecture Rooms</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="For the Program Under Evaluation" value={totalSharedRooms} disabled onChange={(e) => settotalSharedRooms(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Average size of each lecture room</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="In Square Feet" value={roomsize} disabled onChange={(e) => setroomsize(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Instructional Facilities provided in lecture rooms</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="Provide Details" value={instructionalFacilities} disabled onChange={(e) => setinstructionalFacilities(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Other facilities</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="(For Example:Heating System,Acs etc)" value={otherFacilities} disabled onChange={(e) => setotherFacilities(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <h1 className="heading6-of-header fnt-poppins">Computing Labs</h1>

                            <div class="form-row">
                                <div class="name">Total Number of Computing Labs</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="For the Program Under Evaluation" value={totalComputerLabs} disabled  onChange={(e) => settotalComputerLabs(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Average Number Of Computers per Lab</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="For the Program Under Evaluation" value={averageComputerLabs} disabled onChange={(e) => setaverageComputerLabs(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Average Lifetime of PC in computer labs</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="No of Years" value={pcLifeTime} disabled onChange={(e) => setpcLifeTime(e.target.value)} />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="name">Total Number of Lab hours per week</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={totalLabHours} disabled onChange={(e) => settotalLabHours(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Nature and level of Netwoking</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="Provide Details" value={networking} disabled onChange={(e) => setnetworking(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Specialized lab facilities and Hours of their availability</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="Provide Details" value={specialFacilities} disabled onChange={(e) => setspecialFacilities(e.target.value)}></textarea>
                                    </div> </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Is there any Logic Design Lab for CS students</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={isLogicDesign} disabled onChange={(e) => setisLogicDesign(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Is there any exclusive Final Year Lab for CS students</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={exclusiveFinalYearLab} disabled onChange={(e) => setexclusiveFinalYearLab(e.target.value)} />
                                </div>
                            </div>

                            <h1 className="heading6-of-header fnt-poppins">Labs Info. For the Year {new Date().getFullYear() - 1}</h1>
                            <div class="form-row">
                                <div class="name">Students to Computer Ratio</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={studentToComputerRatio1} disabled onChange={(e) => setstudentToComputerRatio1(e.target.value)} />
                                </div>
                            </div>

                            <h1 className="heading6-of-header fnt-poppins">Labs Info. For the Year {new Date().getFullYear() - 2}</h1>
                            <div class="form-row">
                                <div class="name">Students to Computer Ratio</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={studentToComputerRatio2} disabled onChange={(e) => setstudentToComputerRatio2(e.target.value)} />
                                </div>
                            </div>

                            <h1 className="heading6-of-header fnt-poppins">Labs Info. For the Year {new Date().getFullYear() - 3}</h1>
                            <div class="form-row">
                                <div class="name">Students to Computer Ratio</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={studentToComputerRatio3}disabled onChange={(e) => setstudentToComputerRatio3(e.target.value)} />
                                </div>
                            </div>


                            <h1 className="heading6-of-header fnt-poppins">Library</h1>
                            <div class="form-row">
                                <div class="name">Total Number of books in Library</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={totalLibraryBooks} disabled onChange={(e) => settotalLibraryBooks(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Total Number of Unique titles in Library</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={uniqueTitle} disabled onChange={(e) => setuniqueTitle(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Is connected to HEC digital Library</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={hecDigitalLibrary} disabled onChange={(e) => sethecDigitalLibrary(e.target.value)} />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="name">Is there any library management system</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={libraryManagementSystem} disabled onChange={(e) => setlibraryManagementSystem(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Is there access to IEEE/ACM journals/Proceedings in library</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={ieee} disabled onChange={(e) => setieee(e.target.value)} />
                                </div>
                            </div>
                            <h1 className="heading6-of-header fnt-poppins">Section Info. For the Year {new Date().getFullYear() - 1}</h1>
                            <div class="form-row">
                                <div class="name">Computing Books added to Library</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={booksAdded1} disabled onChange={(e) => setbooksAdded1(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Number of printed technical magazines</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={printedMagzines1} disabled onChange={(e) => setprintedMagzines1(e.target.value)} />
                                </div>
                            </div>

                            <h1 className="heading6-of-header fnt-poppins">Section Info. For the Year {new Date().getFullYear() - 2}</h1>
                            <div class="form-row">
                                <div class="name">Computing Books added to Library</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={booksAdded2} disabled onChange={(e) => setbooksAdded2(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Number of printed technical magazines</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={printedMagzines2} disabled onChange={(e) => setprintedMagzines2(e.target.value)} />
                                </div>
                            </div>

                            <h1 className="heading6-of-header fnt-poppins">Section Info. For the Year {new Date().getFullYear() - 3}</h1>
                            <div class="form-row">
                                <div class="name">Computing Books added to Library</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={booksAdded3} disabled onChange={(e) => setbooksAdded3(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Number of printed technical magazines</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" placeholder="please write clear answer" value={printedMagzines3} disabled onChange={(e) => setprintedMagzines3(e.target.value)} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-success btn-block" onClick={() => window.location.reload()}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GENERALINFORMAITION;
