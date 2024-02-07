let group = {
    title: 'Cohort 34.1',
    students: ['Iryna', 'Kateryna', 'Maryna', 'Oksana', 'Tatiana'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        }
        
        this.students.forEach(show.bind(this)); //
    }
}
console.log(group);
// unmodified
group.showList();
const newGroup = group;
group = null;
console.log('=========================');
newGroup.showList();
