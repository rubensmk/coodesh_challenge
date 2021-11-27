import React, { useContext } from "react";
import { UsersContext } from "../context/user/UsersContext";

export default function SearchByFilter() {
    const { setSearchBy } = useContext(UsersContext);

    function handleSubmitFilter(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchBy(event.target.value);
    }
    return (
        <div className="ml-8">
            <div onChange={handleSubmitFilter} className="flex-col justify-center items-center">
                <section>
                    <p className="mr-2">Search By: </p>
                    <input className="mr-1" type="radio" value="by Name" name="gender" defaultChecked />
                    <span className="mr-4">Name</span>
                </section>

                <section>
                    <input className="mr-1" type="radio" value="by Nationality (Ex:BR,FR,US)" name="gender" />
                    <span>Nationality</span>
                </section>
            </div>
        </div>

    )
}
