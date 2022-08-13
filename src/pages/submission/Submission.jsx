import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useLocation } from "react-router-dom";
import "./submission.css";

const Submission = () => {
  const { state } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    swal({
      title: "Tersimpan",
      text: "Data berhasil disimpan",
      icon: "success",
      button: "Oke",
    }).then(function () {
      window.location = "/";
    });
  };

  console.log(state);
  return (
    <div className="submission">
      <div className="submitForm">
        <h2>Data Submit</h2>
        <div className="top">
          <div className="left">
            <p>
              Nama Lengkap : <span>{state.namaLengkap}</span>
            </p>
            <p>
              Jenis Kelamin : <span>{state.kelamin}</span>
            </p>
            <p>
              Umur : <span>{state.usia} thn</span>
            </p>
          </div>
          <div className="right">
            <p>
              N.I.K : <span>{state.nik}</span>
            </p>
            <p>
              No K.K : <span>{state.kartuKeluarga}</span>
            </p>
          </div>
        </div>
        <div className="middle">
          <div className="left">
            <p>
              RT / RW :{" "}
              <span>
                {state.rt} / {state.rw}
              </span>
            </p>
            <p>
              Kel / Desa : <span>{state.kelurahan}</span>
            </p>
            <p>
              Kec. : <span>{state.kecamatan}</span>
            </p>
          </div>
          <div className="right">
            <p>
              Kab / Kota : <span>{state.kota}</span>
            </p>
            <p>
              Provinsi : <span>{state.provinsi}</span>
            </p>
          </div>
        </div>
        <div className="alamat">
          <p>Alamat :</p>
          <span>{state.alamat}</span>
        </div>
        <div className="middle">
          <div className="left">
            <p>Penghasilan sblm pandemi :</p>
            <p>Penghasilan sesudah pandemi :</p>
            <p>Alasan Bantuan :</p>
            <p>Alasan Lainnya :</p>
          </div>
          <div className="right">
            <p>
              Rp. <span>{state.sebelumPandemi}</span>
            </p>
            <p>
              Rp. <span>{state.sesudahPandemi}</span>
            </p>
            <p>
              <span>{state.alasanBantuan}</span>
            </p>
            <p>
              <span>{state.alasanLain}</span>
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p>Lampiran Foto KTP : </p>
            <img src={state.previewKTP} alt="Preview Image" className="ktp" />
          </div>
          <div className="right">
            <p>Lampiran Foto KK : </p>
            <img src={state.previewKK} alt="Preview Image" className="ktp" />
          </div>
        </div>
        <form className="submit" onSubmit={handleSubmit}>
          <div className="submitInput">
            <input type="checkbox" required={true} />
            <label className="submitLabel">
              Saya menyatakan bahwa data yang diisikan adalah benar dan siap
              mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam
              data tersebut.
            </label>
          </div>
          <button type="submit" className="buttonSubmit">
            Save Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default Submission;
