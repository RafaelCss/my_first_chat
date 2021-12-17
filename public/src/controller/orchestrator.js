//passar a responsabilidade do servidor entregar caminho
const urlCadastro = "http://localhost:3333/cadastro";
const urlLogin = "http://localhost:3333/login";
const urlChat = "http://localhost:3333/chat";
const messageUrl = "http://localhost:3333/message";

//*******
class Orchestrator {
  // static async cadastrarUser (user){ //user = {nome, email, senha}
  static async cadatroUser(user) {
    const response = await fetch(urlCadastro, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        const data = response.json();

        return data;
      })
      .catch((err) => {
        const erro = err.json();

        return erro;
      });

    return response;
  }

  static async logarUser(login) {
    //login = {email, senha} e retorna o nome do usuário e email.
    try {
      const response = await fetch(urlLogin, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async dataProcessing(data) {
    // tratando os dados de login
    const url = data;
    try {
      const response = await fetch(`${urlChat}/${url}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async salveMessage(message) {
    // Salvando as messagens no banco de dados
    try {
      const response = await fetch(`${urlChat}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async bringMessage(emaildata) {
    // trazer as messagens
    const { email } = emaildata;
    try {
      const response = await fetch(`${messageUrl}/${email}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
export default Orchestrator;
