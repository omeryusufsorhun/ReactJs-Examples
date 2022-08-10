import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [veri, setVeri] = useState(""); //veriyi burada tutacağız.
  const [tarih, setTarih] = useState(""); //tarihe göre veri çekeceğiz.

  useEffect(() => {
    //anlık veri değişimi olacağı için useEffecti kullanacağız.
    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((response) => setVeri(response.data[tarih]))
      .catch((err) => console.log(err));
  }, [veri, tarih]); // veri veya tarihten birisi değiştiği zaman bu fonksiyon çalışacak.

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-white display-3">
              TÜRKİYE COVID-19 SORGULAMA EKRANI
            </h2>
            <input
              type="text"
              placeholder="GG/AA/YYYY"
              className="form-control"
              onChange={(e) => setTarih(e.target.value)}
            ></input>
            <table className="table text-white">
              <thead>
                <tr>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Vefat Sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr className={veri === undefined ? "bg-danger" : "bg-success"}>
                  <th scope="row">1</th>
                  <td>
                    {veri === undefined ? "Veri bekleniyor" : veri.totalTests}
                  </td>
                  <td>
                    {veri === undefined ? "Veri bekleniyor" : veri.patients}
                  </td>
                  <td>
                    {veri === undefined ? "Veri bekleniyor" : veri.deaths}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
