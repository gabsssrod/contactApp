import { stringify } from "querystring";

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
				});
			},
			removeCard: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				}).then(alert("bye 4eva"));
			}
		}
	};
};

export default getState;
