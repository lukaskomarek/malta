import FlightCard from '@/components/TripInfo/FlightCard'
import AccommodationCard from '@/components/TripInfo/AccommodationCard'
import InfoCard from '@/components/TripInfo/InfoCard'
import LinksCard from '@/components/TripInfo/LinksCard'
import AttractionsCard from '@/components/TripInfo/AttractionsCard'

export default function InfoPage() {
  return (
    <div className="space-y-4">
      <FlightCard />
      <AccommodationCard />
      <InfoCard />
      <AttractionsCard />
      <LinksCard />
    </div>
  )
}
