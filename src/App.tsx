import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, Award, Download, Search, AlertTriangle, Zap, FileCheck, 
  Calendar, ExternalLink, Mail, Linkedin, ChevronDown 
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const RESUME_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/cd0690c75_ShaunKThiviergeResume.pdf";
const PROFILE_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/4a22a0f08_profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-700/20 rounded-full blur-2xl"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 mb-8">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 font-medium text-sm">Security Professional</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Shaun K. Thivierge</h1>
            <h2 className="text-2xl md:text-3xl font-light text-slate-300 mb-8 leading-relaxed">Cyber & Physical Security Leader</h2>
            
            <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
              {['CPP', 'PSP', 'PCI', 'CompTIA Security+', 'FAA Part 107'].map((cert) => (
                <div key={cert} className="px-4 py-2 bg-slate-800/50 border border-slate-600 text-slate-200 text-sm font-medium hover:bg-slate-700/50 transition-colors rounded-full flex items-center gap-2">
                  <Award className="w-3 h-3 text-amber-400" />{cert}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get In Touch
              </button>
              <a 
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold text-base flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl"></div>
                <img 
                  src={PROFILE_IMAGE} 
                  alt="Shaun Thivierge Headshot" 
                  className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-slate-700" 
                  referrerPolicy="no-referrer"
                />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const bioRef = useRef<HTMLDivElement>(null);

  const expertiseItems = [
    { icon: <Search className="w-7 h-7 text-white" />, title: "Vulnerability Management", desc: "Comprehensive security assessments and vulnerability identification across enterprise environments." },
    { icon: <AlertTriangle className="w-7 h-7 text-white" />, title: "Threat Assessment", desc: "Advanced threat modeling and risk analysis for complex organizational security landscapes." },
    { icon: <Shield className="w-7 h-7 text-white" />, title: "Risk Mitigation", desc: "Strategic implementation of security controls and risk reduction frameworks." },
    { icon: <Zap className="w-7 h-7 text-white" />, title: "Security Automation", desc: "Utilization of automation frameworks to enhance security operations and incident response." },
    { icon: <FileCheck className="w-7 h-7 text-white" />, title: "Regulatory Compliance", desc: "Expert guidance on PCI DSS, SOX, and other critical regulatory compliance frameworks." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Areas of Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Comprehensive security leadership across cyber and physical domains, with proven expertise in enterprise-scale implementations.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 bg-slate-50 rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Career Summary</h3>
            <div 
              ref={bioRef}
              style={{ maxHeight: isBioOpen ? bioRef.current?.scrollHeight : '180px' }}
              className="overflow-hidden transition-all duration-500 ease-in-out relative"
            >
              <p className="text-slate-700 leading-relaxed mb-6">
                Over a career spanning more than a decade, Shaun has progressed from front-line security operations to senior leadership roles managing global cyber and physical security programs. Beginning as a Flex Officer in 2010, he advanced through GSOC operations, site supervision, and account management before stepping into corporate security advisory roles. His path includes leadership in emergency management during California wildfires, global security systems management, and the convergence of cyber–physical risk programs. Today, as Vulnerability Detection Manager at Oportun, Shaun drives remediation, compliance, and innovation across infrastructure, applications, and vendor ecosystems—while fostering cross-functional collaboration with Legal, HR, Safety, and Facilities.
              </p>
              {!isBioOpen && <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent" />}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Strategic Planning & Execution", "Process Improvement & Automation", 
                "Physical & Cyber–Security Management", "Risk Assessment & Mitigation",
                "Project Management & Control", "Vendor Management",
                "Team Leadership & Support", "Staff Training & Development", "Emergency Management"
              ].map(tag => (
                <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
          <div className="border-t border-slate-200 px-8 py-4">
            <button 
              onClick={() => setIsBioOpen(!isBioOpen)}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              <span>{isBioOpen ? 'Show Less' : 'Read Full Bio'}</span>
              <ChevronDown className={`ml-2 w-5 h-5 transition-transform duration-300 ${isBioOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {expertiseItems.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1); // Default to Oportun

  const experiences = [
    {
      company: "Baku Security Consulting",
      logo: "https://images.squarespace-cdn.com/content/v1/699f0dda7e774b53e00e66ff/037341e0-bb10-4152-8ef6-e923699696e7/Baku+logo_Clear.png?format=500w",
      link: "https://bakusecurity.com",
      title: "Owner",
      period: "Nov 2025 - Present",
      tags: ["Consulting Services", "Vulnerability & Risk Management"],
      details: [
        "Subject Matter Expert partnership with Defencify Training to develop cybersecurity training programs.",
        "Offering expert consulting services in security and risk management."
      ],
      skills: ["Risk Management", "Operational Audits", "Technology Audits", "Policy Development"]
    },
    {
      company: "Oportun",
      logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/5524926f0_oportun.png",
      title: "Vulnerability Detection Manager | Cyber Security Manager",
      period: "Dec 2023 - Present",
      tags: ["PCI DSS", "Vulnerability Management"],
      details: [
        "Led team to remediate ~2k findings for PCI DSS 3.2.1 Level 1 audit compliance.",
        "Maintained 104%+ remediation rates across infrastructure and code vulnerabilities.",
        "Restructured the Vulnerability Management program by revising 6 policies and procedures.",
        "Managed SAST, DAST, BugBounty, and other scanning platforms and vendor relationships."
      ],
      skills: ["PCI DSS", "Vulnerability Management", "SAST/DAST", "Policy Development"]
    },
    {
      company: "Oportun",
      logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/5524926f0_oportun.png",
      title: "Sr. Cyber Security Engineer | Security Services Reliability Engineer",
      period: "Aug 2022 - Dec 2023",
      tags: ["SOAR", "SIEM", "Threat Intelligence"],
      details: [
        "Developed department-wide RFP and POC process for vendor evaluation.",
        "Built integrations for 14 IoC and threat feeds for automated vulnerability triage.",
        "Managed onboarding of cloud SIEM platform for CSOC incident response.",
        "Managed deployment of SOAR, including 25+ integrations and 6 runbook developments."
      ],
      skills: ["SOAR", "SIEM", "Threat Intelligence", "Vendor Onboarding"]
    },
    {
      company: "Oportun",
      logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/5524926f0_oportun.png",
      title: "Global Security Systems Manager | Security Technology Manager",
      period: "Apr 2019 - Aug 2022",
      tags: ["Global Security", "System Maintenance"],
      details: [
        "Oversaw system maintenance for 350+ locations internationally.",
        "Conducted cyber security tool stack assessments to analyze remediation capacity.",
        "Supervised global access control federation integration for 10 locations and 3k employees."
      ],
      skills: ["Global Security", "System Maintenance", "Access Control", "Incident Response"]
    },
    {
      company: "Pacific Gas & Electric",
      logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/769ef3c6b_pge.png",
      title: "Senior Physical Security Specialist",
      period: "Oct 2017 - Mar 2019",
      tags: ["NERC-CIP", "Emergency Operations"],
      details: [
        "Maintained NERC-CIP adherence via risk assessments and penetration testing.",
        "Directly administered PG&E emergency basecamp operations in 2017 and 2018 wildfires.",
        "Initiated onboarding and training program for 670+ contracted security officers."
      ],
      skills: ["NERC-CIP", "Vendor Compliance", "Emergency Operations", "Physical Security"]
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">A proven track record of security leadership across diverse industries, from financial services to critical infrastructure.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 overflow-hidden ${activeIndex === idx ? 'ring-2 ring-blue-500/20' : ''}`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full text-left p-6"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="flex-1 mb-4 sm:mb-0">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`logo-container flex-shrink-0 transition-all duration-300 ${activeIndex === idx ? 'scale-75' : 'scale-100'}`}>
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <img src={exp.logo} alt={`${exp.company} logo`} className={`logo object-contain transition-all duration-300 ${activeIndex === idx ? 'h-10' : 'h-14'}`} />
                          </a>
                        ) : (
                          <img src={exp.logo} alt={`${exp.company} logo`} className={`logo object-contain transition-all duration-300 ${activeIndex === idx ? 'h-10' : 'h-14'}`} />
                        )}
                      </div>
                      <span className={`font-bold text-slate-800 transition-all duration-300 ${activeIndex === idx ? 'text-lg' : 'text-xl'}`}>{exp.company}</span>
                    </div>
                    <h3 className={`font-bold text-slate-900 mb-2 transition-all duration-300 ${activeIndex === idx ? 'text-xl' : 'text-2xl'}`}>{exp.title}</h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`tech-tags hidden sm:flex flex-wrap gap-2 justify-end max-w-xs transition-opacity duration-300 ${activeIndex === idx ? 'opacity-0' : 'opacity-100'}`}>
                      {exp.tags.map(tag => (
                        <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className={`p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-all duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-5 h-5 text-slate-600" />
                    </div>
                  </div>
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-200 overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-4">
                      <div className="space-y-3 my-4">
                        {exp.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Award className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: detail }} />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map(skill => (
                          <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    { title: "Certified Protection Professional (CPP)", org: "ASIS International", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/d63f71b44_cpp.png", link: "https://www.credly.com/badges/d6e7e513-507e-4fb4-ac17-5960d8300980" },
    { title: "Physical Security Professional (PSP)", org: "ASIS International", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/ade4afc7d_psp.png", link: "https://www.credly.com/badges/61e332cd-e32b-4147-a8c6-0027837245e1" },
    { title: "Professional Certified Investigator (PCI)", org: "ASIS International", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/ed34c6465_pci.png", link: "https://www.credly.com/badges/ed4b3029-cd9b-4328-80b1-66d7230dc69b" },
    { title: "CompTIA Security+", org: "CompTIA", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/7c19526f6_securityplus.png", link: "https://www.credly.com/badges/ba619732-33f8-45df-a0ed-84d5d3c04607" },
    { title: "OSHA 30-Hour Construction", org: "ClickSafety", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/f867f74f5_osha30.png", link: "https://business.clicksafety.com/impe/ucp/certificate/certificate.asp?courseid=MOOD39&userid=sthivierge" },
    { title: "FAA Part 107 Remote Pilot", org: "Federal Aviation Administration", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/94ee40ea6_faa.png", link: "https://amsrvs.registry.faa.gov/airmeninquiry/Main.aspx" },
    { title: "Amateur Radio Operator (KG6TNB)", org: "Federal Communications Commission", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/d2925db3a_fcc.png", link: "https://wireless2.fcc.gov/UlsApp/UlsSearch/searchLicense.jsp" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Industry-recognized certifications demonstrating expertise across cybersecurity, physical security, and specialized domains.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {certs.map((cert, idx) => (
            <motion.a 
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer block"
            >
              <div className="relative bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className="absolute top-3 right-3 p-1.5 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <ExternalLink className="w-4 h-4 text-slate-700" />
                </div>
                <div className="h-24 w-full flex items-center justify-center mb-4">
                  <img src={cert.logo} alt={`${cert.title} logo`} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-md font-bold text-slate-900 leading-tight flex-grow">{cert.title}</h3>
                <p className="text-blue-600 font-semibold text-sm mt-1">{cert.org}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const edu = [
    { title: "Bachelor of Science, Political Science & Global Studies", org: "Arizona State University", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/b49504865_asu.png" },
    { title: "Cybersecurity Bootcamp", org: "University of California, Berkeley", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/986dbcd18_ucberkeley.png" },
    { title: "Customer Experience Certificate", org: "University of California, Irvine", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b7388775b8970c2dce000f/27eca2483_uci.png" },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Education & Development</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">A foundation in global studies complemented by specialized training in cybersecurity and customer experience.</p>
        </motion.div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {edu.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="h-20 w-full flex items-center justify-center mb-6">
                <img src={item.logo} alt={`${item.org} logo`} className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 flex-grow">{item.title}</h4>
              <p className="text-blue-600 font-medium mt-2">{item.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Publications = () => {
  const pubs = [
    { title: "The Future of Integrated Security Operations", source: "Security Management Magazine", date: "May 2022", desc: "Exploring the convergence of cyber and physical security in modern enterprise environments.", link: "#" },
    { title: "Physical and Digital Convergence in Security", source: "Swiftlane Blog", date: "March 2022", desc: "How organizations can achieve seamless integration between physical access control and cybersecurity.", link: "#" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Featured Articles & Publications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Thought leadership and insights on the evolving landscape of security management.</p>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-8">
          {pubs.map((pub, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">{pub.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                          <p className="text-blue-600 font-semibold">{pub.source}</p>
                          <div className="flex items-center gap-1 text-slate-500">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{pub.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed pl-16 md:pl-0">{pub.desc}</p>
                  </div>
                  <a href={pub.link} className="flex-shrink-0 mt-4 md:mt-0 flex items-center gap-2 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                    <span>Read Article</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">Ready to discuss security challenges, collaboration opportunities, or potential career moves? I'd love to hear from you.</p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 h-full flex flex-col hover:bg-slate-700 transition-colors duration-300 border border-slate-700"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6"><Mail className="w-7 h-7 text-white" /></div>
              <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
              <p className="text-slate-300 mb-6 leading-relaxed flex-grow">Reach out directly for professional inquiries and opportunities.</p>
              <a href="mailto:sthivierge@gmail.com" className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold">
                <ExternalLink className="w-4 h-4 mr-2" />Send Email
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 h-full flex flex-col hover:bg-slate-700 transition-colors duration-300 border border-slate-700"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6"><Linkedin className="w-7 h-7 text-white" /></div>
              <h3 className="text-2xl font-bold text-white mb-4">LinkedIn</h3>
              <p className="text-slate-300 mb-6 leading-relaxed flex-grow">Connect with me on LinkedIn to stay updated on professional developments.</p>
              <a href="https://www.linkedin.com/in/sthivierge" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold">
                <ExternalLink className="w-4 h-4 mr-2" />View Profile
              </a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Resume Download</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">Download a comprehensive overview of my experience and qualifications.</p>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-base rounded-lg inline-flex items-center justify-center gap-2 mx-auto font-semibold">
                <Download className="w-5 h-5 mr-2" />Download Resume (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-slate-900 text-white selection:bg-blue-500 selection:text-white min-h-screen font-sans">
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Certifications />
        <Education />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}
