const questionList = () => {


    formik.values.questions.map(function (item, index) {

        return (
            <li className="m-5">

                <label className="m-4" htmlFor="ta-1">Question</label>
                <textarea value={formik.values.questions[index].question} onChange={formik.handleChange} className=" col-lg-12 text-white bg-transparent form-control" />
                <label htmlFor="" className="m-1">Options :</label>

                

            </li>
        )



    })
}