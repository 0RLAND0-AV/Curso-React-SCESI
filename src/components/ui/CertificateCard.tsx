import type { Certificate } from '../../types/index.types';

interface CertificateCardProps {
certificate: Certificate;
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
return (
    <div className="certificate-card">
    <div className="certificate-image">
        <img src={certificate.imageUrl} alt={certificate.title} style={{ width: '300px', borderRadius: '300px' }} />
    </div>
    <div className="certificate-content">
        <h4 className="certificate-title">{certificate.title}</h4>
        <p className="certificate-issuer">{certificate.issuer}</p>
        <p className="certificate-date">{certificate.date}</p>
        
        {certificate.credentialId && (
        <p className="certificate-id">ID: {certificate.credentialId}</p>
        )}
        
        <div className="certificate-skills">
        {certificate.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
        ))}
        </div>
        
        {certificate.credentialUrl && (
        <a 
            href={certificate.credentialUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="certificate-verify-link"
        >
            Verificar Certificado
        </a>
        )}
    </div>
    </div>
);
};