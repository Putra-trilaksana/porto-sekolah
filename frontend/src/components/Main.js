import React from "react";
import CardKegiatan from "./CardKegiatan";
import Hero from "./Hero";
import CardJurusan from "./CardJurusan";
import tkj from '../assets/tkj.png'
import kgt from '../assets/kegiatan.jpg'

const Main = () => {
    return (
        <div className="">
            <Hero text="SMA PRADIKA NUSANTARA"/>
            {/* Jurusan */}
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1 className="">Pilihan Jurusan</h1>
                    </div>
                    <div className="col-12 d-flex flex-lg-row flex-column justify-content-between ">
                            <CardJurusan judul="Teknik Komputer & Jaringan" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deserunt?" image={tkj}/>                     
                            <CardJurusan judul="Akuntansi dan Perkantoran" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deserunt?" image={tkj}/>
                            <CardJurusan judul="Teknik Kendaraan Ringan" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deserunt?" image={tkj}/>
                            <CardJurusan judul="Rekayasa Perangkat Lunak" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deserunt?" image={tkj}/>
                    </div>
                </div>
            </div>
            {/* Kegiatan */}
            <div className="container">
                <div className="col-12 my-5">
                    <h1>Kegiatan Sekolah</h1>
                </div>
                <div className="col-12">
                    <CardKegiatan image={kgt} title="Pembagian Bansos Ramadhan"/>
                    <CardKegiatan image={kgt} title="Pembagian Bansos Ramadhan"/>
                    <CardKegiatan image={kgt} title="Pembagian Bansos Ramadhan"/>
                    <CardKegiatan image={kgt} title="Pembagian Bansos Ramadhan"/>
                </div>
            </div>
        </div>
    )
}

export default Main;