const insertRef = document.querySelector('#insert') ;

window.addEventListener('keydown', (event) => {
    insertRef.innerHTML = `
        <div class="color">
            <table>
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th> 
                </tr>
                <tr> 
                    <td>${event.key === ' ' ? "Space" : event.key}</td>
                    <td>${event.keyCode}</td>
                    <td>${event.code}</td>
                </tr>
            </table>
        </div>
    `
}) ;

console.log(insertRef)