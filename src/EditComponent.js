import React, { Component } from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaBeer } from 'react-icons/fa';
const customSingleValue = ({ data }) => (
    <div className="input-select">
        <div className="input-select__single-value">
            { data.icon && <span className="input-select__icon">{ data.icon }</span> }
            <span>{ data.label }</span>
        </div>
    </div>
);
class EditComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            titleSelect: "",
            title: [
                { value: 'Mr.', label: 'Mr.' ,icons:<FaBeer />},
                { value: 'Mrs.', label: 'Mrs.' ,icons:<FaBeer />},
                { value: 'MISS.', label: 'MISS' ,icons:<FaBeer />}
            ],
            firstName: "",
            lastName:"",
            startDat: new Date(),
            nationalitySelect: "",
            nationality: [
                { value: 'Afghan', label: 'Afghan'},
                { value: 'Dutch', label: 'Dutch' },
                { value: 'Thai', label: 'Thai' },
                { value: 'Turkish', label: 'Turkish' },
                { value: 'Welsh', label: 'Welsh' },
                { value: 'Zambian', label: 'Zambian' },
            ],
            id1:'',
            id2:'',
            id3:'',
            id4:'',
            id5:'',
            CitizenId :'',
            genderFemale:true,
            genderMale:false,
            unisex:false,
            phoneSelect:'',
            phone: [
                { value: '+66', label: '+66'},
                { value: '+99', label: '+99' },
                { value: '+11', label: '+11' },
            ],
            numberPhone:'',
            preFixPhone:'',
            passport:'',
            salary:0,
            gender:''
        }
        this.id2 = React.createRef()
        this.id3 = React.createRef()
        this.id4 = React.createRef()
        this.id5 = React.createRef()
        ;
    }
    _onChange(value) {
        console.log(value)
        this.setState({titleSelect: value,gender:value.value});
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
        console.log(date);
    };
    _onChangeNationality(value){
        this.setState({nationalitySelect: value});
    }
    handle1(e){
        let regEx = /[0-9]/
        if(regEx.test(e)){
            this.id2.current.focus()
            this.setState({id1:e})
        }else if(e.length ===0){
            this.setState({id1:e})
        }

    }

    handle2(e){
        let regEx = /[0-9]/
        if(regEx.test(e)){
            if(e.length === 4){
                this.id3.current.focus()
            }
            this.setState({id2:e})
        }else if(e.length ===0){
            this.setState({id2:e})
        }
    }
    handle3(e){
        let regEx = /[0-9]/
        if(regEx.test(e)){
            if(e.length === 5){
                this.id4.current.focus()
            }
            this.setState({id3:e})
        }else if(e.length ===0){
            this.setState({id3:e})
        }
    }
    handle4(e){
        let regEx = /[0-9]/
        if(regEx.test(e)){
            if(e.length === 3){
                this.id5.current.focus()
            }
            this.setState({id4:e})
        }else if(e.length ===0){
            this.setState({id4:e})
        }
    } 
    handle5(e){
        let regEx = /[0-9]/
        if(regEx.test(e)){
            this.setState({id5:e})
        }else if(e.length ===0){
            this.setState({id5:e})
        }
    }

    handleSubmit2(){
        this.setState({CitizenId:this.state.id1+this.state.id2+this.state.id3+this.state.id4+this.state.id5})
        console.log(this.state.CitizenId);
    }
    _onChangePhone(e){
        this.setState({phoneSelect: e});

    }
    salaryHandle(e){
        this.setState({salary:e})
    }
    passportHandle(e){
        this.setState({passport:e})
    }
    handleSubmit = (e) =>{
        // e.preventDefault()  //ไม่ต้องรีหน้า
        //Object
        const data = {
            id: new Date(),
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            gender:this.state.gender,
            editing:false,
            mobilePhone:this.state.numberPhone,
            preFixPhone:this.state.phoneSelect,
            nationality:this.state.nationalitySelect.value
        }
        // console.log(data);
        //Edit data Object Complete
        this.props.dispatch({
            type:"UPDATE_COMMENT",
            id:this.props.comment.id,
            data
        })
    }

    render(){
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{backgroundColor:'white',width:'95%',height:500,padding:10}}>

                    {/* row 1  */}
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <h3>Title : </h3>
                        <div style={{width:120,height:40,marginTop:10,marginLeft:10,marginRight:10}}>
                            <Select
                                name="form-field-name"
                                value={this.state.titleSelect}
                                options={this.state.title}
                                placeholder="gender"
                                searchable={false}
                                onChange={(value)=>{this._onChange(value)}}
                                defaultValue={this.state.title[0]}
                                components={ {SingleValue: customSingleValue } }
                            />
                        </div>
                        {/* show first name */}
                        <div style={{width:50}}/>
                        <h3>FirstName : </h3>
                        <div style={{width:20}}/>
                        <form style={{marginTop:20}}>
                            <input type="text"  name="name"  onChange={(value)=>{this.setState({firstName:value.target.value})}} value={this.state.firstName} />
                        </form>

                        {/* show last name */}
                        <div style={{width:50}}/>
                        <h3>LastName : </h3>
                        <div style={{width:20}}/>
                        <form style={{marginTop:20}}>
                            <input type="text" name="name" onChange={(value)=>{this.setState({lastName:value.target.value})}} value={this.state.lastName}/>
                        </form>
                    </div>

                    {/* row 2 */}
                    
                    <div style={{marginTop:20,flexDirection:'row',display:'flex'}}>
                        <h3>Birthday : </h3>
                        <div style={{marginTop:20,marginLeft:20}}>
                            <DatePicker
                                iconClassName='calendar icon'
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div style={{width:20}}/>
                        <h3>Nationality : </h3>
                        <div style={{width:200,height:"",marginTop:10,marginLeft:10,marginRight:10}}>
                            <Select
                                name="form-field-name"
                                value={this.state.nationalitySelect}
                                options={this.state.nationality}
                                placeholder="-- please select --"
                                searchable={false}
                                onChange={(value)=>{this._onChangeNationality(value)}}
                            />
                        </div>

                    </div>

                    <div style={{display:'flex',flexDirection:'row'}}>
                        <h3 style={{marginRight:20}}>CitizenId :</h3>
                        <form style={{marginTop:20}}>
                            <input style={{width:20,textAlign:'center'}} type="text" name="name" 
                                maxLength={1}
                                onChange={(e)=>{this.handle1(e.target.value)}}
                                value={this.state.id1}/>
                        </form>   
                        <h3>-</h3>
                        <form style={{marginTop:20}}>
                            <input style={{width:60,textAlign:'center'}} type="text" name="name" 
                                maxLength={4}
                                ref={this.id2}
                                onChange={(e)=>{this.handle2(e.target.value)}}
                                value={this.state.id2}/>
                        </form>
                        <h3>-</h3>
                        <form style={{marginTop:20}}>
                            <input style={{width:80,textAlign:'center'}} type="text" name="name" 
                                maxLength={5}
                                ref={this.id3}
                                onChange={(e)=>{this.handle3(e.target.value)}}
                                value={this.state.id3}/>
                        </form>
                        <h3>-</h3>
                        <form style={{marginTop:20}}>
                            <input style={{width:50,textAlign:'center'}} type="text" name="name" 
                                maxLength={3}
                                ref={this.id4}
                                onChange={(e)=>{this.handle4(e.target.value)}}
                                value={this.state.id4}/>
                        </form>
                        <h3>-</h3>
                        <form style={{marginTop:20}}>
                            <input style={{width:20,textAlign:'center'}} type="text" name="name" 
                                
                                maxLength={1}
                                ref={this.id5}
                                onChange={(e)=>{this.handle5(e.target.value)}}
                                value={this.state.id5}/>
                        </form>
                    </div>

                    <div style={{display:'flex',flexDirection:'row'}}>
                        <h3>Gender : </h3>
                        <form style={{marginTop:22,marginLeft:20}}>
                            <label>
                                <input type="radio" value="Male" checked={this.state.genderMale} onClick={()=>{this.setState({genderMale:true,genderFemale:false,unisex:false,gender:"Male"})}} />
                                Male
                            </label>
                            <label>
                                <input type="radio" value="Female" checked={this.state.genderFemale} onClick={()=>{this.setState({genderMale:false,genderFemale:true,unisex:false,gender:"Female"})}}/>
                                Female
                            </label>
                            <label>
                                <input type="radio" value="Unisex" checked={this.state.unisex} onClick={()=>{this.setState({genderMale:false,genderFemale:false,unisex:true,gender:"Unisex"})}}/>
                                Unisex
                            </label>
                        </form>
                    </div>

                    <div style={{flexDirection:'row',display:'flex'}}>
                        <h3>Mobile Phone : </h3>
                        <div style={{width:100,marginTop:15,marginLeft:20}}>
                        <Select
                            name="form-field-name"
                            value={this.state.phoneSelect}
                            options={this.state.phone}
                            placeholder=""
                            searchable={false}
                            onChange={(value)=>{this._onChangePhone(value)}}
                        />
                        </div>
                        <h3 style={{marginLeft:20}}> - </h3>
                        <div style={{width:30,height:100,marginTop:20,marginLeft:20}}>
                            <input type="text" maxLength={9} value={this.state.numberPhone} onChange={(e)=>{this.setState({numberPhone:e.target.value})}}></input>
                        </div>
                    </div>
                    
                    <div  style={{flexDirection:'row',display:'flex',marginTop:-50}}>
                        <h3>Passport No : </h3>
                        <div style={{width:100,marginTop:20,marginLeft:20}}>
                            <input type="text" maxLength={9} value={this.state.passport} onChange={(e)=>this.passportHandle(e.target.value)}></input>
                        </div>
                    </div>

                    <div  style={{flexDirection:'row',display:'flex'}}>
                        <h3>Expect Salary : </h3>
                        <div style={{width:100,marginTop:20,marginLeft:20}}>
                            <input type="text" maxLength={9} value={this.state.salary} onChange={(e)=>this.salaryHandle(e.target.value)}></input>
                        </div>
                        <h3 style={{marginLeft:100}}>THB </h3>
                        <div style={{marginLeft:500,marginTop:20}}>
                            <button style={{height:60}} onClick={this.handleSubmit}>UPDATE</button>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}
export default connect() (EditComponent)