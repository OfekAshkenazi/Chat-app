export default function GenderBox({ handleCheckBox, selectedGender }) {
    return (
        <section className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" && "selected"}`}>
                    <span className="label-text text-gray-300">Male</span>
                    <input
                        type="checkbox"
                        className="checkbox border-slate-900"
                        checked={selectedGender === "male"}
                        onChange={() => handleCheckBox("male")}
                    />
                </label>

            </div>

            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" && "selected"}`}>
                    <span className="label-text text-gray-300">Female</span>
                    <input
                        type="checkbox"
                        className="checkbox border-slate-900 "
                        checked={selectedGender === "female"}
                        onChange={() => handleCheckBox("female")}
                    />
                </label>

            </div>

        </section>
    )
}