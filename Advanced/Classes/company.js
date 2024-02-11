class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || salary < 0 || !position) {
            throw new Error('Invalid input!')
        }
        let employee = {
            username: username,
            salary: Number(salary),
            position: position,
        }
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push(employee);
        return `New employee is hired. Name: ${username}. Position: ${position}`

    }

    bestDepartment() {
        function avgSalary(department) {
            let employeesCount = department.length;
            let totalSalary = 0;

            for (const employee of department) {
                totalSalary += employee.salary;
            }
            return Number((totalSalary / employeesCount).toFixed(2));

        }
        let arrOfDepartsment = Object.entries(this.departments);
        let sorted = arrOfDepartsment.sort((a, b) => avgSalary(b[1]) - avgSalary(a[1]));

        let bestDepartment = sorted[0];
        let bestDepartmentAvgSalary = avgSalary(bestDepartment[1]);

        let stringToPrint = `Best Department is: ${bestDepartment[0]}\nAverage salary: ${bestDepartmentAvgSalary.toFixed(2)}\n`;

        let sortedEmployees = bestDepartment[1].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
        for (const empl of sortedEmployees) {
            stringToPrint += `${empl.username} ${empl.salary} ${empl.position}\n`;
        }

        return stringToPrint.trim();
    }



};