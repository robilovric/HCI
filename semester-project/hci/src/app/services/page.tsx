import {
  medicalNewsServiceText,
  onlineAppointmentsServiceText,
  patientManagementServiceText,
  telemedicineServiceText,
} from "@/helpers/constants";
import ServiceCard from "./components/ServiceCard";
import appointmentImage from "../../../public/images/appointment.jpg";
import managementImage from "../../../public/images/management.jpg";
import newsImage from "../../../public/images/news.jpg";
import telemedicineImage from "../../../public/images/telemedicine.jpg";

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-black text-3xl font-bold">Services Page</h1>
      <div className="pt-6 flex flex-col gap-4 items-center">
        <ServiceCard
          serviceCardTitle={"Online Appointments"}
          serviceCardText={onlineAppointmentsServiceText}
          serviceCardImage={appointmentImage}
        />
        <ServiceCard
          serviceCardTitle={"Patient Management"}
          serviceCardText={patientManagementServiceText}
          serviceCardImage={managementImage}
        />
        <ServiceCard
          serviceCardTitle={"Medical News"}
          serviceCardText={medicalNewsServiceText}
          serviceCardImage={newsImage}
        />
        <ServiceCard
          serviceCardTitle={"Telemedicine"}
          serviceCardText={telemedicineServiceText}
          serviceCardImage={telemedicineImage}
        />
      </div>
    </main>
  );
}
