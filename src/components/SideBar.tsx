import { useState } from "react";

const SideBar = () => {

    const [projectArray, setProjectArray] = useState([""]);
    const [newProjectName, setNewProjectName] = useState("");

    return (
        <div id="sidebar-container">
            <section id="sidebar-title-section">
                <h1>Todo the Thing</h1>
                <span>Where things get done.</span>
            </section>
            <section id="sidebar-projects-section">
                <input type="text" name="project-name" id="project-name-input" onChange={(e) => setNewProjectName(e.target.value)}/>
                <button onClick={() => setProjectArray([...projectArray, newProjectName])}>Add New Project</button>
                <ul>
                    {projectArray.map((item, id) => {
                        console.log(item);
                        return <li>{item}</li>;
                    })}
                </ul>
            </section>
        </div>
    )
}

export default SideBar;