
function MainTable() {
    return (
        <>
            <main>
                <div>
                    <table>
                        <caption>FM2 Class List</caption>
                        <thead>
                            <tr>
                                <th rowSpan={3}>CLASS</th><th colSpan={4}>SPEED</th><th colSpan={2}>ACELERATION</th><th colSpan={2}>BRAKING</th><th colSpan={2}>HANDLING</th>
                            </tr>
                            <tr>
                                <th colSpan={2}>Max</th><th colSpan={2}>Min</th><th>Max</th><th>Min</th><th>Max</th><th>Min</th><th>Max</th><th>Min</th>
                            </tr>
                            <tr>
                                <th>SP</th><th colSpan={2}>Km/h</th><th>SP</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>D</td><td>3.5</td><td>200</td><td>250</td><td>3.8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default MainTable