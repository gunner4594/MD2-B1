
// Sử dụng phương thức reduce
const inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]

let machineValue = inventory.filter((type) => {
    return type.type === 'machine'
});

let totalMachineValue = machineValue.reduce((a,b) => a+b.value,0);
console.log(totalMachineValue)


