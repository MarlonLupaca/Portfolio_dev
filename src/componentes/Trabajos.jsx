import React from 'react';
import Proyecto from './Proyecto';
import {
  dataSistemaDeInventarios,
  dataJavaEstructura,
  dataJavaFarmacia,
  dataJavaPasteleria,
  dataPorfolio,
  DataEcommerce,
} from './data';

const Trabajos = () => {
  return (
    <div id="Proyectos" className="pt-[50px]">
      <section className="pt-4 flex flex-col items-center gap-2">
        <h2 className="text-center text-[30px] font-[800] mb-3">
          Proye<span className="text-principal">ctos</span>
        </h2>
        <div className="CustomGrid">
          <Proyecto proyecto={dataSistemaDeInventarios} />
          <Proyecto proyecto={dataJavaEstructura} />
          <Proyecto proyecto={dataJavaFarmacia} />
          <Proyecto proyecto={dataJavaPasteleria} />
          <Proyecto proyecto={DataEcommerce} />
          <Proyecto proyecto={dataPorfolio} />
        </div>
      </section>
    </div>
  );
};

export default Trabajos;
