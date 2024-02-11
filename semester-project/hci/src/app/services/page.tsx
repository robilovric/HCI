import {
  medicalNewsServiceText,
  onlineAppointmentsServiceText,
  patientManagementServiceText,
  telemedicineServiceText,
} from "@/helpers/constants";
import ServiceCard from "./components/ServiceCard";

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-3xl font-bold">Services Page</h1>
      <div className="pt-6 flex flex-col gap-2">
        <div className="inline-flex gap-2">
          <ServiceCard
            serviceCardTitle={"Online Appointments"}
            serviceCardText={onlineAppointmentsServiceText}
          />
          <ServiceCard
            serviceCardTitle={"Patient Management"}
            serviceCardText={patientManagementServiceText}
          />
        </div>
        <div className="inline-flex gap-2">
          <ServiceCard
            serviceCardTitle={"Medical News"}
            serviceCardText={medicalNewsServiceText}
          />
          <ServiceCard
            serviceCardTitle={"Telemedicine"}
            serviceCardText={telemedicineServiceText}
          />
        </div>
      </div>
    </main>
  );
}
