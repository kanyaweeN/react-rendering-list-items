import teams from "../data/teams";

function TeamList() {
    return (
        teams.map((item) =>
            <div>
                <div className="max-w bg-white shadow-lg rounded-xl p-4 m-5 flex space-x-4 w-80">
                    {`${item.name} Team (${item.id})`}
                </div>
                <div className="pl-15">
                    {
                        item.children.map((child) =>
                            <div className="max-w bg-white shadow-lg rounded-xl p-4 m-5 flex space-x-4 w-80">
                                {`${child.name} Team (${child.id})`}
                            </div>
                        )
                    }
                </div>
            </div>
        )
    )
}

export default TeamList;