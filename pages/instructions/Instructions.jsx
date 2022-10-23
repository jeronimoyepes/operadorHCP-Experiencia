import AsideGeneral from "@/components/asideGeneral/AsideGeneral";

const asideGeneralData = {
  h1: "IC-HCP",
  h2: "Iniciativa científica",
  description: "Lista de actividades del operador",
  date: "04/10/22",
};

export default function Instructions() {
  return (
    <>
      <AsideGeneral props={asideGeneralData}></AsideGeneral>
    </>
  );
}
