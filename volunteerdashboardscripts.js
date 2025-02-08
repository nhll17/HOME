const cases = [
    { name: "John Doe", age: 45, gender: "Male", needs: "Medical Aid", priority: "High", status: "Pending", lat: 28.6139, lng: 77.2090 },
    { name: "Mary Jane", age: 32, gender: "Female", needs: "Shelter", priority: "Medium", status: "In Progress", lat: 19.0760, lng: 72.8777 },
    { name: "Ravi Kumar", age: 60, gender: "Male", needs: "Food & Water", priority: "High", status: "Needs More Help", lat: 13.0827, lng: 80.2707 }
];

let map;
let marker;

function initMap() {
    // Default center (India) 
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.5937, lng: 78.9629 }, 
        zoom: 5,
    });

    marker = new google.maps.Marker({
        map: map
    });
}

function loadCases() {
    const caseList = document.getElementById("caseList");
    caseList.innerHTML = "";

    cases.forEach((caseData, index) => {
        const row = `
            <tr>
                <td>${caseData.name}</td>
                <td>${caseData.age}</td>
                <td>${caseData.gender}</td>
                <td>${caseData.needs}</td>
                <td>${caseData.priority}</td>
                <td>
                    <select onchange="updateStatus(${index}, this.value)">
                        <option value="Pending" ${caseData.status === "Pending" ? "selected" : ""}>Pending</option>
                        <option value="In Progress" ${caseData.status === "In Progress" ? "selected" : ""}>In Progress</option>
                        <option value="Needs More Help" ${caseData.status === "Needs More Help" ? "selected" : ""}>Needs More Help</option>
                        <option value="Completed" ${caseData.status === "Completed" ? "selected" : ""}>Completed</option>
                    </select>
                </td>
                <td><button onclick="showLocation(${index})">📍 Location</button></td>
            </tr>`;
        caseList.innerHTML += row;
    });
}

function updateStatus(index, newStatus) {
    cases[index].status = newStatus;
    console.log("Updated case:", cases[index]);
}

function showLocation(index) {
    const caseData = cases[index];

    // Update map to case's location
    const location = { lat: caseData.lat, lng: caseData.lng };
    map.setCenter(location);
    map.setZoom(12);
    marker.setPosition(location);

    console.log(`Showing location for ${caseData.name}: ${caseData.lat}, ${caseData.lng}`);
}

window.onload = function () {
    loadCases();
    initMap();
};
