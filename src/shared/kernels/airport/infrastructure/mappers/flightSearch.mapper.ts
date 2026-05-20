import { FlightSearchSessionEntity } from '../../domain/entities/FlightSearchSessionEntity'
import type { FlightSearchInput } from '../../domain/types/FlightSearchInput'
import type {
  FlightSearchRequestDto,
  FlightSearchResponseDto,
} from '../dto/FlightSearchRequestDto'

export function mapFlightSearchInputToDto(input: FlightSearchInput): FlightSearchRequestDto {
  return {
    TripType: input.tripType,
    Adult: input.adult,
    Child: input.child,
    Infant: input.infant,
    IsDirect: input.isDirect,
    Cabin: input.cabin,
    AgentId: input.agentId,
    VFRSearchType: input.vfrSearchType,
    Items: input.items.map((item) => ({
      DepAirport: item.depAirport,
      ArrAirport: item.arrAirport,
      Date: item.date,
    })),
  }
}

export function mapFlightSearchResponseToEntity(dto: FlightSearchResponseDto): FlightSearchSessionEntity {
  return new FlightSearchSessionEntity({
    sessionId: dto.SessionId,
  })
}
