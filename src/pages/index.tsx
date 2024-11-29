export default function Home() {
  return (
    // Página inteira
    <div className="bg-white w-full flex flex-col min-h-screen">
      
      {/* Cabeçalho */}
      <header className="flex items-center justify-between p-4 bg-green-100">
        {/* Logo e nome do GHMat */}
        <div className="flex items-center gap-4">
          <img
            src="https://raw.githubusercontent.com/RomuloAlves2507/server/1fb43c79a63de0abd1d76629de0ec0545c88145b/Logo_HIMAT.png"
            width={150}
            alt="Logo GHMat"
          />
        </div>
        
        {/* Ícones de redes sociais e botão para download */}
        <div className="flex items-center gap-4">
          
          {/* Facebook */}
          <a href="https://www.facebook.com/ghmatifes/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/673/705/original/glossy-facebook-3d-render-icon-free-png.png"
              alt="Facebook do GHMat"
              style={{ width: '60px', height: '60px' }}
            />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/ghmatifes" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_1280.png"
              alt="Instagram do GHMat"
              style={{ width: '40px', height: '40px' }}
            />
          </a>
        </div>
      </header>

      {/* Seção sobre o GHMat */}
      <section className="p-8 bg-green-50">
        <h1 className="text-2xl font-bold mb-4 text-green-900">Sobre o GHMat</h1>
        <p className="text-gray-700">
          O Grupo de Pesquisas em História da Matemática e Saberes Tradicionais (GHMat) é formado por pesquisadores, professores e estudantes de diversas áreas, unidos pelo interesse comum em promover uma educação matemática interdisciplinar que explora a relação entre a história da matemática e os saberes tradicionalmente associados a comunidades culturais.
          Fundado em 2019 no Instituto Federal de Educação do Espírito Santo (Ifes) - Campus Vitória, o GHMat se dedica a investigar o papel da matemática nas diversas culturas ao longo da história, bem como sua relevância para a educação contemporânea.
        </p>
        <p className="mt-4 text-gray-700">
          Baseando-se em referenciais teóricos como o Programa Etnomatemática, proposto por Ubiratan D'Ambrosio (1998, 2008), a pedagogia libertadora de Paulo Freire (1968), e a ideia da formação integral da pessoa, como defendido por povos tradicionais e ilustrado por Meliá (1999), o GHMat busca não apenas expandir o entendimento sobre a matemática, mas também promover uma educação que valorize e integre os saberes culturais.
        </p>
      </section>

      {/* Seção sobre a contribuição */}
      <section className="p-8 bg-pink-50">
        <h1 className="text-2xl font-bold mb-4 text-pink-900">Minha Contribuição</h1>
        <p className="text-gray-700">
          Dentre os resultados deste trabalho destaca-se a organização de uma planilha eletrônica contendo todos os Planos de Trabalho de Iniciação Científica desenvolvidos pelo GHMat nos seus primeiros cinco anos, de 2019 a 2024, na qual sua parte pública pode ser visualizada a seguir. A planilha apresenta além dos dados do plano de trabalho a Instituição de Ensino Superior (IES) a qual os estudantes de IC-Jr ingressaram após concluírem o Ensino Médio, cujo levantamento foi realizado com o auxílio da estudante de IC-Jr Sophia Soares.
        </p>
        <p className="mt-4 text-gray-700">
          Este trabalho culminou também na publicação de um artigo no 7º Congresso Brasileiro de Etnomatemática (7CBEm), um evento de âmbito nacional no campo da Etnomatemática.
        </p>
      </section>

      {/* Planilha embutida */}
      <section className="p-8 bg-orange-50">
        <h1 className="text-2xl font-bold mb-4 text-orange-900">Planilha de Dados</h1>
        <iframe 
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_m5FkjvFQA58Smg6au025MvqTsUiey7EFUF-AUp-UEdsi-xlFHG-zVTs8PGXJGZN_vSi00NkxvFHk/pubhtml?gid=473784434&amp;single=true&amp;widget=true&amp;headers=false"
          width="100%"
          height="600"
          frameBorder="0"
          title="Planilha de Dados do GHMat"
        ></iframe>
      </section>

      {/* Links para downloads */}
      <section className="p-8 bg-green-50 flex flex-col items-center gap-4">
        <a 
          href="https://drive.google.com/uc?id=1pj-65ZhD5C48mgh10KRiG1WRwn0Ostax&export=download" 
          className="bg-green-500 text-white py-2 px-4 rounded text-lg"
        >
          Baixar Pôster
        </a>
        <a 
          href="https://drive.google.com/uc?id=1k-houkt3vFDjhqwhSLpmkSUOEMb_DsGa&export=download" 
          className="bg-pink-500 text-white py-2 px-4 rounded text-lg"
        >
          Baixar Artigo para o 7º CBEm
        </a>
      </section>

      {/* Rodapé */}
      <footer className="bg-orange-100 flex items-center justify-center p-4">
        <h3 translate="no" lang="en">
          copyright © 2024 Romulo Alves Luciano
        </h3>
      </footer>
    </div>
  );
}
