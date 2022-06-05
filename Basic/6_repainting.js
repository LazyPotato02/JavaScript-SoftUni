function repainting(input) {
    let nailon = (Number(input[0]) + 2) * 1.50
    let pain = (Number(input[1])+ (input[1] * 0.10)) * 14.50
    let pain_thinner = Number(input[2]) * 5.00
    let work_hours = Number(input[3])
    let material_cost = nailon + pain + pain_thinner + 0.40
    let work_cost = material_cost * 0.30
    let work = (work_cost * work_hours) + material_cost
    console.log(work)
}
repainting(["10", "11", "4", "8"])