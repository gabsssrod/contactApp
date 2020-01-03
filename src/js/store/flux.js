import { stringify } from "querystring";
import { useHistory } from "react-router-dom";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: [
				{
					full_name: "",
					email: "",
					agenda_slug: "",
					address: "",
					phone: ""
				}
			]
		},

		actions: {
			addContact: (a, b, c, d) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: a,
						email: d,
						agenda_slug: "gabyAgenda",
						address: b,
						phone: c
					})
                })
                let history = useHistory();
                
			}
		}
	};
};

export default getState;
