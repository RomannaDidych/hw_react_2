import React, {Component} from 'react';
import './styles.css';
import Contact from'./Contact.js';

const contacts = [{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
    }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
    }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666"
    }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
    }];

class Contracts extends Component {
	
    state = {
    	contacts: contacts,
    	search: '',
    	checkMale: true,
    	checkFemale: true,
    	checkUnknown: true
    }

    handleSearchChange = async (e) => {
    	await this.setState({search: e.target.value});    	
    	this.filterContacts();
    }

    filterContacts =  () => {
    	const currentSearch = this.state.search.toLowerCase();    	
    	let filteredContacts = contacts.filter(contact => 
    		contact.firstName.toLowerCase().includes(currentSearch) || 
    		contact.lastName.toLowerCase().includes(currentSearch) || 
    		contact.phone.toLowerCase().includes(currentSearch));    	
    	if(filteredContacts !==[]) {
    		 this.setState({contacts: filteredContacts})
    	} else {
    		 this.setState({contacts: contacts})
    	}
    }

    setGenderFilter = (e) =>{
    	const gender = e.target.name;
    	const isChecked = e.target.checked
    	if (gender === "male") this.setState({checkMale: isChecked});
    	if (gender === "female") this.setState({checkFemale: isChecked});
    	if (gender === "unknown") this.setState({checkUnknown: isChecked});    	
    }

    filterGender = async (event) => {
    	await this.setGenderFilter(event);
    	let filteredGender = contacts.filter(contact => (contact.gender === "male" && (this.state.checkMale)) ||
            (contact.gender === "female" && this.state.checkFemale) || (contact.gender === undefined && this.state.checkUnknown))
    	this.setState({contacts: filteredGender})
    }   	


	render(){
		return (			
			<div className="contracts-block">
				<input className="input" type="text" value={this.state.search} onChange = {this.handleSearchChange} />
				<div className= "checkboxArea">
					<p><input className="checkbox" defaultChecked="true" type="checkbox" name= "male" value={this.state.checkMale} onChange = {this.filterGender} />male</p>
					<p><input className="checkbox" defaultChecked="true" type="checkbox" name= "female" value={this.state.checkMale} onChange = {this.filterGender} />female</p>
					<p><input className="checkbox" defaultChecked="true" type="checkbox" name= "unknown" value={this.state.checkMale} onChange = {this.filterGender} />unknown</p>
				</div>				
				{this.state.contacts.map((contact, i) => <Contact {...contact} key={i}/>)}
			</div>
		)
	}
}

export default Contracts