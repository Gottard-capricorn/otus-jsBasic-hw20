function User() {
    this.AskName = function() {
        this.Age = prompt("Write your age: ");
        function AskAge() {
            this.Name = prompt("Write your Name: ");
            function showAgeInConsole() {
                console.log(this.Age);
                function showNameInAlert() {
                    console.log(this.Name);
                }
                const showNameInAlertWithContext = showNameInAlert.bind(this);
                return {
                    showNameInAlert: showNameInAlertWithContext,
                }
            }
            const showAgeInConsoleWithContext = showAgeInConsole.bind(this);
            return {
                showAgeInConsole: showAgeInConsoleWithContext,
            }
        }
        const AskAgeWithContext = AskAge.bind(this);
        return {
            AskAge: AskAgeWithContext,
        };
    }
}

const u = new User;

u.AskName().AskAge().showAgeInConsole().showNameInAlert();
//Посмотреть решение остальных. Спросить в чате? Как долго кто делал?