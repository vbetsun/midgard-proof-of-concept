import { Resolver, Query } from '@nestjs/graphql';
import { Tenant } from '../entities';
import { TenantsService } from '../services';

@Resolver(() => Tenant)
export class TenantsResolver {
  constructor(private readonly tenantsService: TenantsService) {}

  @Query(() => [Tenant])
  async tenants(): Promise<Tenant[]> {
    return this.tenantsService.find();
  }
}
