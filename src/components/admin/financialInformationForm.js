import React, { useState, useEffect } from 'react';
import './common.css'
import axios from 'axios';
import { apiPath } from '../../config';
import { CSVLink } from "react-csv";
const FINANCIALYEAR = () => {
    const [expenditureInstitution, setexpenditureInstitution] = useState('');
    const [expenditureRearch, setexpenditureRearch] = useState()
    const [expenditureComputingResearch, setexpenditureComputingResearch] = useState([]);
    const [expenditureLibrary, setexpenditureLibrary] = useState('');
    const [expenditureBooks, setexpenditureBooks] = useState()
    const [expenditureFacilities, setexpenditureFacilities] = useState([]);
    const [expenditureComputingDepartment, setexpenditureComputingDepartment] = useState('');
    const [expenditureInstitution1, setexpenditureInstitution1] = useState('');
    const [expenditureRearch1, setexpenditureRearch1] = useState()
    const [expenditureComputingResearch1, setexpenditureComputingResearch1] = useState([]);
    const [expenditureLibrary1, setexpenditureLibrary1] = useState('');
    const [expenditureBooks1, setexpenditureBooks1] = useState()
    const [expenditureFacilities1, setexpenditureFacilities1] = useState([]);
    const [expenditureComputingDepartment1, setexpenditureComputingDepartment1] = useState('');
    const [expenditureInstitution2, setexpenditureInstitution2] = useState('');
    const [expenditureRearch2, setexpenditureRearch2] = useState()
    const [expenditureComputingResearch2, setexpenditureComputingResearch2] = useState([]);
    const [expenditureLibrary2, setexpenditureLibrary2] = useState('');
    const [expenditureBooks2, setexpenditureBooks2] = useState()
    const [expenditureFacilities2, setexpenditureFacilities2] = useState([]);
    const [expenditureComputingDepartment2, setexpenditureComputingDepartment2] = useState('');
    const [expenditureInstitution3, setexpenditureInstitution3] = useState('');
    const [expenditureRearch3, setexpenditureRearch3] = useState()
    const [expenditureComputingResearch3, setexpenditureComputingResearch3] = useState([]);
    const [expenditureLibrary3, setexpenditureLibrary3] = useState('');
    const [expenditureBooks3, setexpenditureBooks3] = useState()
    const [expenditureFacilities3, setexpenditureFacilities3] = useState([]);
    const [expenditureComputingDepartment3, setexpenditureComputingDepartment3] = useState('');
    const [expenditureInstitution4, setexpenditureInstitution4] = useState('');
    const [expenditureRearch4, setexpenditureRearch4] = useState()
    const [expenditureComputingResearch4, setexpenditureComputingResearch4] = useState([]);
    const [expenditureLibrary4, setexpenditureLibrary4] = useState('');
    const [expenditureBooks4, setexpenditureBooks4] = useState()
    const [expenditureFacilities4, setexpenditureFacilities4] = useState([]);
    const [expenditureComputingDepartment4, setexpenditureComputingDepartment4] = useState('');
    const [exportsData, setExportsData] = useState([]);

    useEffect(() => {
        axios.get(apiPath + '/findfinancialinformation/1').then(res => {
            console.log(res.data)
            setExportsData([res.data])
            setexpenditureInstitution(res.data.expenditureInstitution)
            setexpenditureRearch(res.data.expenditureRearch)
            setexpenditureComputingResearch(res.data.expenditureComputingResearch)
            setexpenditureLibrary(res.data.expenditureLibrary)
            setexpenditureBooks(res.data.expenditureBooks)
            setexpenditureFacilities(res.data.expenditureFacilities)
            setexpenditureComputingDepartment(res.data.expenditureComputingDepartment)
            setexpenditureInstitution1(res.data.expenditureInstitution1)
            setexpenditureRearch1(res.data.expenditureRearch1)
            setexpenditureComputingResearch1(res.data.expenditureComputingResearch1)
            setexpenditureLibrary1(res.data.expenditureLibrary1)
            setexpenditureBooks1(res.data.expenditureBooks1)
            setexpenditureFacilities1(res.data.expenditureFacilities1)
            setexpenditureComputingDepartment1(res.data.expenditureComputingDepartment1)
            setexpenditureInstitution2(res.data.expenditureInstitution2)
            setexpenditureRearch2(res.data.expenditureRearch2)
            setexpenditureComputingResearch2(res.data.expenditureComputingResearch2)
            setexpenditureLibrary2(res.data.expenditureLibrary2)
            setexpenditureBooks2(res.data.expenditureBooks2)
            setexpenditureFacilities2(res.data.expenditureFacilities2)
            setexpenditureComputingDepartment2(res.data.expenditureComputingDepartment2)
            setexpenditureInstitution3(res.data.expenditureInstitution3)
            setexpenditureRearch3(res.data.expenditureRearch3)
            setexpenditureComputingResearch3(res.data.expenditureComputingResearch3)
            setexpenditureLibrary3(res.data.expenditureLibrary3)
            setexpenditureBooks3(res.data.expenditureBooks3)
            setexpenditureFacilities3(res.data.expenditureFacilities3)
            setexpenditureComputingDepartment3(res.data.expenditureComputingDepartment3)
            setexpenditureInstitution4(res.data.expenditureInstitution4)
            setexpenditureRearch4(res.data.expenditureRearch4)
            setexpenditureComputingResearch4(res.data.expenditureComputingResearch4)
            setexpenditureLibrary4(res.data.expenditureLibrary4)
            setexpenditureBooks4(res.data.expenditureBooks4)
            setexpenditureFacilities4(res.data.expenditureFacilities4)
            setexpenditureComputingDepartment4(res.data.expenditureComputingDepartment4)

        })
    }, [])
    async function update() {
        await axios.put(apiPath + '/updatefinancialinformation/1', {
            expenditureInstitution,
            expenditureRearch,
            expenditureComputingResearch,
            expenditureLibrary,
            expenditureBooks,
            expenditureFacilities,
            expenditureComputingDepartment,
            expenditureInstitution1,
            expenditureRearch1,
            expenditureComputingResearch1,
            expenditureLibrary1,
            expenditureBooks1,
            expenditureFacilities1,
            expenditureComputingDepartment1,
            expenditureInstitution2,
            expenditureRearch2,
            expenditureComputingResearch2,
            expenditureLibrary2,
            expenditureBooks2,
            expenditureFacilities2,
            expenditureComputingDepartment2,
            expenditureInstitution3,
            expenditureRearch3,
            expenditureComputingResearch3,
            expenditureLibrary3,
            expenditureBooks3,
            expenditureFacilities3,
            expenditureComputingDepartment3,
            expenditureInstitution4,
            expenditureRearch4,
            expenditureComputingResearch4,
            expenditureLibrary4,
            expenditureBooks4,
            expenditureFacilities4,
            expenditureComputingDepartment4
        }).then(res => {
            alert("successfully Updated")
            window.location.reload()
        })
    }
    return (
        <div class="page-wrapper p-t-100 p-b-50">
            <div class="wrapper wrapper--w900">
                <div class="card card-6">
                    <div id='printMe'>
                        <div class="card-heading" style={{ backgroundColor: "gray" }} >
                            <h2 class="title">Financial Information Form</h2>
                        </div>
                        <div class="card-body">
                            <form method="POST">

                                <h1 className="heading6-of-header fnt-poppins">Financial of Year {new Date().getFullYear()}</h1>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Institution</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureInstitution} onChange={(e) => setexpenditureInstitution(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Anual Expenditure for Research and Faculty Development</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureRearch} onChange={(e) => setexpenditureRearch(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Computing Department's Research and Faculty Development</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureComputingResearch} onChange={(e) => setexpenditureComputingResearch(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Anual Expenditure for library</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" placeholder="In Millions" name="full_name" value={expenditureLibrary} onChange={(e) => setexpenditureLibrary(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Annual Expenditure for Computing Books</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureBooks} onChange={(e) => setexpenditureBooks(e.target.value)} />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure for Computing Facilities</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureFacilities} onChange={(e) => setexpenditureFacilities(e.target.value)} />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Computing Department</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" placeholder="In Millions" name="full_name" value={expenditureComputingDepartment} onChange={(e) => setexpenditureComputingDepartment(e.target.value)} />
                                    </div>
                                </div>



                                <h1 className="heading6-of-header fnt-poppins">Financial of Year {new Date().getFullYear() - 1}</h1>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Institution</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureInstitution1} onChange={(e) => setexpenditureInstitution1(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">=Anual Expenditure for Research and Faculty Development</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureRearch1} onChange={(e) => setexpenditureRearch1(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Computing Department's Research and Faculty Development</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureComputingResearch1} onChange={(e) => setexpenditureComputingResearch1(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Anual Expenditure for library</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" placeholder="In Millions" name="full_name" value={expenditureLibrary1} onChange={(e) => setexpenditureLibrary1(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Annual Expenditure for Computing Books</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureBooks1} onChange={(e) => setexpenditureBooks1(e.target.value)} />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure for Computing Facilities</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureFacilities1} onChange={(e) => setexpenditureFacilities1(e.target.value)} />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Computing Department</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" placeholder="In Millions" name="full_name" value={expenditureComputingDepartment1} onChange={(e) => setexpenditureComputingDepartment1(e.target.value)} />
                                    </div>
                                </div>



                                <h1 className="heading6-of-header fnt-poppins">Financial of Year {new Date().getFullYear() - 2}</h1>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Institution</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureInstitution2} onChange={(e) => setexpenditureInstitution2(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">=Anual Expenditure for Research and Faculty Development</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureRearch2} onChange={(e) => setexpenditureRearch2(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Computing Department's Research and Faculty Development</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureComputingResearch2} onChange={(e) => setexpenditureComputingResearch2(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Anual Expenditure for library</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" placeholder="In Millions" name="full_name" value={expenditureLibrary2} onChange={(e) => setexpenditureLibrary2(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Annual Expenditure for Computing Books</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureBooks2} onChange={(e) => setexpenditureBooks2(e.target.value)} />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure for Computing Facilities</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureFacilities2} onChange={(e) => setexpenditureFacilities2(e.target.value)} />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Computing Department</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" placeholder="In Millions" name="full_name" value={expenditureComputingDepartment2} onChange={(e) => setexpenditureComputingDepartment2(e.target.value)} />
                                    </div>
                                </div>



                                <h1 className="heading6-of-header fnt-poppins">Financial of Year {new Date().getFullYear() - 3}</h1>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Institution</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureInstitution3} onChange={(e) => setexpenditureInstitution3(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">=Anual Expenditure for Research and Faculty Development</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureRearch3} onChange={(e) => setexpenditureRearch3(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Computing Department's Research and Faculty Development</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureComputingResearch3} onChange={(e) => setexpenditureComputingResearch3(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Anual Expenditure for library</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" placeholder="In Millions" name="full_name" value={expenditureLibrary3} onChange={(e) => setexpenditureLibrary3(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Annual Expenditure for Computing Books</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureBooks3} onChange={(e) => setexpenditureBooks3(e.target.value)} />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure for Computing Facilities</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureFacilities3} onChange={(e) => setexpenditureFacilities3(e.target.value)} />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Computing Department</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" placeholder="In Millions" name="full_name" value={expenditureComputingDepartment3} onChange={(e) => setexpenditureComputingDepartment3(e.target.value)} />
                                    </div>
                                </div>



                                <h1 className="heading6-of-header fnt-poppins">Financial of Year {new Date().getFullYear() - 4}</h1>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Institution</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureInstitution4} onChange={(e) => setexpenditureInstitution4(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">=Anual Expenditure for Research and Faculty Development</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureRearch4} onChange={(e) => setexpenditureRearch4(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Computing Department's Research and Faculty Development</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureComputingResearch4} onChange={(e) => setexpenditureComputingResearch4(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Anual Expenditure for library</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" placeholder="In Millions" name="full_name" value={expenditureLibrary4} onChange={(e) => setexpenditureLibrary4(e.target.value)} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Annual Expenditure for Computing Books</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureBooks4} onChange={(e) => setexpenditureBooks4(e.target.value)} />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure for Computing Facilities</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" name="full_name" placeholder="In Millions" value={expenditureFacilities4} onChange={(e) => setexpenditureFacilities4(e.target.value)} />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="name">Anual Expenditure of Computing Department</div>
                                    <div class="value">
                                        <input class="input--style-6" type="number" placeholder="In Millions" name="full_name" value={expenditureComputingDepartment4} onChange={(e) => setexpenditureComputingDepartment4(e.target.value)} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-success btn-block" onClick={update}>Update</button>
                        {exportsData && <button class="btn btn-success btn-block" style={{ color: 'white' }}><CSVLink style={{ color: 'white' }} data={exportsData && exportsData} target="_blank"
                            filename={"financialInformationForm.csv"}>Export</CSVLink></button>}

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
export default FINANCIALYEAR;
