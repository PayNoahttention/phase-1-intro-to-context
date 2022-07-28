// Your code here
const createEmployeeRecord = (field) => {
    return {
        firstName: field[0],
        familyName: field[1],
        title: field[2],
        payPerHour: field[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = (employeeInfo) => {
    return employeeInfo.map((field) => {
        return createEmployeeRecord(field)
    })
}

const createTimeInEvent = (employee, timeStamp) => {
    
}