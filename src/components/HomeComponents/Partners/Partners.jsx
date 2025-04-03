export default function Partners() {
  const hospitals = [
    { name: "Hospital Santa Rita", logo: "/assets/logoHPs/SantaRitaLogo-Photoroom.png" },
    { name: "Hospital Evangélico", logo: "/assets/logoHPs/cropped-LogoHE_newbrand.webp" },
    { name: "Hospital Semper", logo: "/assets/logoHPs/SemperLogo-Photoroom.png"},
    { name: "Hospital Lifecenter", logo: "/assets/logoHPs/lifecenterLogo-Photoroom.png" },
    { name: "Hospital Materdei", logo: "/assets/logoHPs/MaterDeiLogo-Photoroom.png" },
  ]

  const insurances = [
    { name: "logo da Unimed", logo: "assets/logoPlans/UnimedLogo-Photoroom.png" },
    { name: "logo da IPSEMG", logo: "assets/logoPlans/ipsemgLogo-Photoroom.png" },
    { name: "logo da MedSênior", logo: "assets/logoPlans/MedSeniorLogo-Photoroom.png" },
    { name: "logo da Geap", logo: "assets/logoPlans/geap-logo-Photoroom.png" },
    { name: "logo da Saúde Bradesco", logo: "assets/logoPlans/bradescoLogo-Photoroom.png" },
    { name: "logo da Hapvida - NDI", logo: "assets/logoPlans/hapvidaLogo-Photoroom.png" },
    { name: "logo da Amil", logo: "assets/logoPlans/AmilLogo-Photoroom.png" },
    { name: "logo da Sul América", logo: "assets/logoPlans/sulamericaLogo-Photoroom.png" },
    { name: "logo da Cemig", logo: "assets/logoPlans/cemigLogo-Photoroom.png" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#EFF6FF] to-[#FFFFFF]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">Parceiros e Convênios</h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Contamos com o apoio e a parceria de hospitais e clínicas reconhecidos pela excelência em exames e tratamentos cardiovasculares.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-[#003366]">
            Hospitais Parceiros
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {hospitals.map((hospital, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center border border-[#F3F4F6] hover:border-[#DBEAFE]"
                style={{ minWidth: "160px", maxWidth: "200px", flex: "1 1 auto" }}
              >
                <img src={hospital.logo} alt={hospital.name} className="w-full h-full object-contain mb-4" />
                <span className="text-[#374151] font-medium text-center">{hospital.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-8 text-[#003366]">
            Convênios Aceitos
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {insurances.map((insurance, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center flex-col gap-2 justify-center border border-[#F3F4F6] hover:border-[#DBEAFE]"
                style={{ minWidth: "140px", maxWidth: "180px", flex: "1 1 auto" }}
              >
                <img src={insurance.logo} alt={insurance.name}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}