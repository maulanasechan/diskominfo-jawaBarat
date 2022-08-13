import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./addData.css";

const AddData = () => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  const [provincies, setProvincies] = useState([]);
  const [provinsi, setProvinsi] = useState([]);

  const [regencies, setRegencies] = useState([]);
  const [kota, setKota] = useState([]);

  const [districts, setDistricts] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);

  const [villages, setVillages] = useState([]);
  const [kelurahan, setKelurahan] = useState([]);

  // selector setup
  useEffect(() => {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then((res) => res.json())
      .then((json) => {
        setProvincies(json);
      });
  }, []);

  const changeSelects = (e) => {
    var str = e.target.value;
    const value = str.split("|");
    if (e.target.id === "last") {
      setKelurahan(value[1]);
    } else {
      fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/${e.target.id}/${value[0]}.json`
      )
        .then((res) => res.json())
        .then((json) => {
          if (e.target.id === "regencies") {
            setRegencies(json);
            setProvinsi(value[1]);
          }
          if (e.target.id === "districts") {
            setDistricts(json);
            setKota(value[1]);
          }
          if (e.target.id === "villages") {
            setVillages(json);
            setKecamatan(value[1]);
          }
        });
    }
  };

  // image setup
  const [fotoKTP, setFotoKTP] = useState("");
  const [previewKTP, setPreviewKTP] = useState("");
  const [fotoKK, setFotoKK] = useState("");
  const [previewKK, setPreviewKK] = useState("");

  const changeImage = (e) => {
    const image = e.target.files[0];
    if (image.size > 2000000) {
      swal({
        title: "Foto Maksimal 2MB",
        text: "Format foto JPG/JPEG/PNG/BMP!",
        icon: "error",
        button: "Tutup",
      });
      e.target.value = null;
    } else {
      if (e.target.name === "KTP") {
        setFotoKTP(image);
        setPreviewKTP(URL.createObjectURL(image));
      } else {
        setFotoKK(image);
        setPreviewKK(URL.createObjectURL(image));
      }
    }
  };

  // value setup
  const [usia, setUsia] = useState(25);
  const [kelamin, setKelamin] = useState("Laki-laki");
  const [alamat, setAlamat] = useState("");
  const [rt, setRT] = useState("");
  const [rw, setRW] = useState("");
  const [sebelumPandemi, setSebelumPandemi] = useState("");
  const [sesudahPandemi, setSesudahPandemi] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [nik, setNIK] = useState("");
  const [kartuKeluarga, setKartuKeluarga] = useState("");
  const [alasanBantuan, setAlasanBantuan] = useState("Kehilangan pekerjaan");
  const [alasanLain, setAlasanLain] = useState("");

  const changeValue = (e) => {
    if (e.target.name === "namaLengkap") {
      setNamaLengkap(e.target.value);
    }
    if (e.target.name === "NIK") {
      setNIK(e.target.value);
    }
    if (e.target.name === "kartuKeluarga") {
      setKartuKeluarga(e.target.value);
    }
    if (e.target.name === "usia") {
      setUsia(e.target.value);
    }
    if (e.target.name === "kelamin") {
      setKelamin(e.target.value);
    }
    if (e.target.name === "alamat") {
      setAlamat(e.target.value);
    }
    if (e.target.name === "RT") {
      setRT(e.target.value);
    }
    if (e.target.name === "RW") {
      setRW(e.target.value);
    }
    if (e.target.name === "sebelumPandemi") {
      setSebelumPandemi(e.target.value);
    }
    if (e.target.name === "sesudahPandemi") {
      setSesudahPandemi(e.target.value);
    }
    if (e.target.name === "alasanBantuan") {
      setAlasanBantuan(e.target.value);
    }
    if (e.target.name === "alasanLain") {
      setAlasanLain(e.target.value);
    }
  };

  // handle submit
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/submissions", {
      state: {
        namaLengkap: namaLengkap,
        nik: nik,
        kartuKeluarga: kartuKeluarga,
        fotoKK: fotoKK,
        previewKK: previewKK,
        fotoKTP: fotoKTP,
        previewKTP: previewKTP,
        usia: usia,
        kelamin: kelamin,
        provinsi: provinsi,
        kota: kota,
        kecamatan: kecamatan,
        kelurahan: kelurahan,
        alamat: alamat,
        rt: rt,
        rw: rw,
        sebelumPandemi: sebelumPandemi,
        sesudahPandemi: sesudahPandemi,
        alasanBantuan: alasanBantuan,
        alasanLain: alasanLain,
      },
    });
  };

  return (
    <div className="addData">
      <form onSubmit={handleSubmit}>
        <div className="tittle">
          <h1>Daftar Bantuan Sosial</h1>
          <h2>Terdampak COVID-19</h2>
        </div>

        <div className="formInput">
          <label>Nama Lengkap</label>
          <input
            type="text"
            onChange={changeValue}
            name="namaLengkap"
            required={true}
            placeholder="Nama Lengkap"
          />
        </div>
        <div className="formInput">
          <label>Nomor Induk Kependudukan (NIK)</label>
          <input
            type="number"
            onChange={changeValue}
            name="NIK"
            required={true}
            placeholder="Nomor Induk Kependudukan"
          />
        </div>
        <div className="formInput">
          <label>Nomor Kartu Keluarga</label>
          <input
            type="number"
            onChange={changeValue}
            name="kartuKeluarga"
            required={true}
            placeholder="Nomor Kartu Keluarga"
          />
        </div>
        <div className="formInput">
          <label>Upload Foto KTP</label>
          <input
            type="file"
            onChange={changeImage}
            name="KTP"
            required={true}
            accept={".jpg,.bmp,.jpeg,.png"}
          />
        </div>
        <div className="formInput">
          <label>Upload Foto Kartu Keluarga</label>
          <input
            type="file"
            onChange={changeImage}
            name="KK"
            required={true}
            accept={".jpg,.bmp,.jpeg,.png"}
          />
        </div>
        <div className="formInput">
          <label>Usia</label>
          <input
            type="number"
            onChange={changeValue}
            name="usia"
            required={true}
            min="25"
            value={usia}
          />
        </div>
        <div className="formInput">
          <label>Jenis Kelamin</label>
          <select name="kelamin" onChange={changeValue} required={true}>
            <option value={"Laki - laki"}>Laki-laki</option>
            <option value={"Perempuan"}>Perempuan</option>
          </select>
        </div>
        <div className="formInput">
          <label>Provinsi</label>
          <select
            name="provinsi"
            onChange={changeSelects}
            id="regencies"
            required={true}
          >
            <option value={0}>Pilih Provinsi</option>
            {provincies.map((prov) => (
              <option value={`${prov.id}|${prov.name}`} key={prov.id}>
                {prov.name}
              </option>
            ))}
          </select>
        </div>
        <div className="formInput">
          <label>Kab/Kota</label>
          <select
            name="kota"
            onChange={changeSelects}
            id="districts"
            required={true}
          >
            <option value={0}>Pilih Kabupaten</option>
            {regencies.map((rege) => (
              <option value={`${rege.id}|${rege.name}`} key={rege.id}>
                {rege.name}
              </option>
            ))}
          </select>
        </div>
        <div className="formInput">
          <label>Kecamatan</label>
          <select
            name="kecamatan"
            onChange={changeSelects}
            id="villages"
            required={true}
          >
            <option value={0}>Pilih Kecamatan</option>
            {districts.map((dist) => (
              <option value={`${dist.id}|${dist.name}`} key={dist.id}>
                {dist.name}
              </option>
            ))}
          </select>
        </div>
        <div className="formInput">
          <label>Kelurahan</label>
          <select
            name="kelurahan"
            onChange={changeSelects}
            id="last"
            required={true}
          >
            <option value={0}>Pilih Kelurahan</option>
            {villages.map((vill) => (
              <option value={`${vill.id}|${vill.name}`} key={vill.id}>
                {vill.name}
              </option>
            ))}
          </select>
        </div>
        <div className="formInput">
          <label>Alamat</label>
          <input
            type="text"
            onChange={changeValue}
            name="alamat"
            required={true}
            minLength={5}
            maxLength={255}
            focused={focused.toString()}
            onBlur={handleFocus}
            placeholder="Alamat Lengkap"
          />
          <span>
            Tidak lebih panjang dari 255 karakter dan Tidak terdapat spesial
            karakter
          </span>
        </div>
        <div className="formInput">
          <label>RT</label>
          <input
            type="number"
            onChange={changeValue}
            name="RT"
            required={true}
            placeholder="RT"
          />
        </div>
        <div className="formInput">
          <label>RW</label>
          <input
            type="number"
            onChange={changeValue}
            name="RW"
            required={true}
            placeholder="RW"
          />
        </div>
        <div className="formInput">
          <label>Penghasilan Sebelum Pandemi</label>
          <input
            type="number"
            onChange={changeValue}
            name="sebelumPandemi"
            required={true}
            placeholder="Penghasilan Sebelum Pandemi"
          />
        </div>
        <div className="formInput">
          <label>Penghasilan Sesudah Pandemi</label>
          <input
            type="number"
            onChange={changeValue}
            name="sesudahPandemi"
            required={true}
            placeholder="Penghasilan Sesudah Pandemi"
          />
        </div>
        <div className="formInput">
          <label>Alasan Bantuan</label>
          <select name="alasanBantuan" onChange={changeValue} required={true}>
            <option value={"Kehilangan pekerjaan"}>Kehilangan pekerjaan</option>
            <option value={"Kepala keluarga terdampak atau korban Covid-19"}>
              Kepala keluarga terdampak atau korban Covid-19
            </option>
            <option value={"Lainnya"}>Lainnya</option>
          </select>
        </div>
        {alasanBantuan === "Lainnya" && (
          <div className="formInput">
            <label>Alasan Lainnya</label>
            <input
              type="text"
              onChange={changeValue}
              name="alasanLain"
              required={true}
              placeholder="Masukkan Alasan Lainnya"
              maxLength={255}
            />
          </div>
        )}
        <button type="submit" className="buttonAdd">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddData;
