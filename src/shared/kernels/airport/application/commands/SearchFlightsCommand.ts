import type { ICommand, ICommandHandler } from '@/app/bus/types'

import type { FlightSearchSessionEntity } from '../../domain/entities/FlightSearchSessionEntity'
import type { IFlightSearchRepository } from '../../domain/repositories/IFlightSearchRepository'
import type { FlightSearchInput } from '../../domain/types/FlightSearchInput'

export class SearchFlightsCommand implements ICommand {
  readonly _type = 'command' as const

  readonly input: FlightSearchInput

  constructor(input: FlightSearchInput) {
    this.input = input
  }
}

export class SearchFlightsCommandHandler implements ICommandHandler<
  SearchFlightsCommand,
  FlightSearchSessionEntity
> {
  private readonly flightSearchRepository: IFlightSearchRepository

  constructor(flightSearchRepository: IFlightSearchRepository) {
    this.flightSearchRepository = flightSearchRepository
  }

  async handle(command: SearchFlightsCommand): Promise<FlightSearchSessionEntity> {
    return this.flightSearchRepository.searchFlights(command.input)
  }
}
