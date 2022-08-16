 function filterEmailEndsWith(data, end){
    return data.filter(user => user.email.endsWith(end))
}