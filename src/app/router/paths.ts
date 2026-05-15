class AppRoutes {
  static readonly dashboard = '/dashboard'

  static readonly flight = '/flights'

  static readonly flightBooking = this.flight + '/book'

  static readonly flightPayment = this.flight + '/payment'
}

export default AppRoutes
