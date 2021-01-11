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
    	search: ''
    }

    handleSearchChange = async (e) => {
    	await this.setState({search: e.target.value});    	
    	this.filterContacts();
    }

    filterContacts =  () => {
    	const currentSearch = this.state.search.toLowerCase();
    	console.log(currentSearch);
    	let filteredContacts = contacts.filter(contact => 
    		contact.firstName.toLowerCase().includes(currentSearch) || 
    		contact.lastName.toLowerCase().includes(currentSearch) || 
    		contact.phone.toLowerCase().includes(currentSearch));
    	console.log(filteredContacts);
    	if(filteredContacts !==[]) {
    		 this.setState({contacts: filteredContacts})
    	} else {
    		 this.setState({contacts: contacts})
    	}
    }	


	render(){
		return (			
			<div className="contracts-block">
				<input className="input" type="text" value={this.state.search} onChange = {this.handleSearchChange} />				
				{this.state.contacts.map((contact, i) => <Contact {...contact} key={i}/>)}
			</div>
			)
	}
}

export default Contracts