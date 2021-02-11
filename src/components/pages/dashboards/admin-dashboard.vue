<template>
	<div class="container">
			
				<div class="page-inner  py-5 mt--5">
					<div class="row  py-5 mt--2">
						<div class="col-md-4">
							<div class="card">
								<div class="card-body pb-0">
									<div class="h1 fw-bold float-right text-primary">+5%</div>
									<h2 class="mb-2">17</h2>
									<p class="text-muted">Users online</p>
									<div class="pull-in sparkline-fix">
										<div id="lineChart"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card">
								<div class="card-body pb-0">
									<div class="h1 fw-bold float-right text-danger">-3%</div>
									<h2 class="mb-2">27</h2>
									<p class="text-muted">New Users</p>
									<div class="pull-in sparkline-fix">
										<div id="lineChart2"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card">
								<div class="card-body pb-0">
									<div class="h1 fw-bold float-right text-warning">+7%</div>
									<h2 class="mb-2">213</h2>
									<p class="text-muted">Transactions</p>
									<div class="pull-in sparkline-fix">
										<div id="lineChart3"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
</template>