export function ShowUsers () {
    return <main id="main" className="main">

    <div className="pagetitle">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="">Home</a></li>
          <li className="breadcrumb-item">Tables</li>
          <li className="breadcrumb-item active">Data</li>
        </ol>
      </nav>
    </div>

    <section className="section">
      <div className="row">
        <div className="col-lg-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Users</h5>

              <table className="table datatable">
                <thead>
                  <tr>
                    <th>
                      <b>N</b>ame
                    </th>
                    <th>Ext.</th>
                    <th>City</th>
                    <th data-type="date" data-format="YYYY/DD/MM">Start Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vivien Dominguez</td>
                    <td>5653</td>
                    <td>Bargagli</td>
                    <td>2001/09/01</td>
                    <td className="d-flex justify-content-evenly">
                        <button className="btn btn-outline-primary"><i className="bi bi-arrow-clockwise"></i></button>
                        <button className="btn btn-outline-warning"><i className="bi bi-battery-half"></i></button>
                        <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>Carissa Lara</td>
                    <td>3241</td>
                    <td>Sherborne</td>
                    <td>2015/07/12</td>
                    <td className="d-flex justify-content-evenly">
                        <button className="btn btn-outline-primary"><i className="bi bi-arrow-clockwise"></i></button>
                        <button className="btn btn-outline-warning"><i className="bi bi-battery-half"></i></button>
                        <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>Hammett Gordon</td>
                    <td>8101</td>
                    <td>Wah</td>
                    <td>1998/06/09</td>
                    <td className="d-flex justify-content-evenly">
                        <button className="btn btn-outline-primary"><i className="bi bi-arrow-clockwise"></i></button>
                        <button className="btn btn-outline-warning"><i className="bi bi-battery-half"></i></button>
                        <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>Walker Nixon</td>
                    <td>6901</td>
                    <td>Metz</td>
                    <td>2011/12/11</td>
                    <td className="d-flex justify-content-evenly">
                        <button className="btn btn-outline-primary"><i className="bi bi-arrow-clockwise"></i></button>
                        <button className="btn btn-outline-warning"><i className="bi bi-battery-half"></i></button>
                        <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>Nathan Espinoza</td>
                    <td>5956</td>
                    <td>Strathcona County</td>
                    <td>2002/25/01</td>
                    <td className="d-flex justify-content-evenly">
                        <button className="btn btn-outline-primary"><i className="bi bi-arrow-clockwise"></i></button>
                        <button className="btn btn-outline-warning"><i className="bi bi-battery-half"></i></button>
                        <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>Kelly Cameron</td>
                    <td>4836</td>
                    <td>Fontaine-Valmont</td>
                    <td>1999/02/07</td>
                    <td className="d-flex justify-content-evenly">
                        <button className="btn btn-outline-primary"><i className="bi bi-arrow-clockwise"></i></button>
                        <button className="btn btn-outline-warning"><i className="bi bi-battery-half"></i></button>
                        <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>Kyra Moses</td>
                    <td>3796</td>
                    <td>Quenast</td>
                    <td>1998/07/07</td>
                    <td className="d-flex justify-content-evenly">
                        <button className="btn btn-outline-primary"><i className="bi bi-arrow-clockwise"></i></button>
                        <button className="btn btn-outline-warning"><i className="bi bi-battery-half"></i></button>
                        <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <td>Grace Bishop</td>
                    <td>8340</td>
                    <td>Rodez</td>
                    <td>2012/02/10</td>
                    <td className="d-flex justify-content-evenly">
                        <button className="btn btn-outline-primary"><i className="bi bi-arrow-clockwise"></i></button>
                        <button className="btn btn-outline-warning"><i className="bi bi-battery-half"></i></button>
                        <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  
                </tbody>
              </table>

            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
}