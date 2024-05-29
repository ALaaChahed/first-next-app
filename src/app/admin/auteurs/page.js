import Listauteur from "@/components/auteurComponent/listauteurs"
import { fetchAuteurs } from "@/services/auteurService";
const getauteurs = async () => {
  const data = await fetchAuteurs();
 
  return data;
};
const AuteurPage = async () => {
  const auteur = await getauteurs();
  console.log(auteur);
  return (
    <div>
      <Listauteur auteurs={auteur} />
    </div>
  );
};
export default AuteurPage;
