using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using concorrencia.domain;
using concorrencia.domain.Identity;

namespace concorrencia.repository
{
    public class DataContext : IdentityDbContext<User, Role, int,
                               IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>,
                               IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Bandeira> Bandeiras { get; set; }
        public DbSet<Regiao> Regioes { get; set; }
        public DbSet<Posto> Postos { get; set; }
        public DbSet<PrecoVenda> PrecoVendas { get; set; }
        public DbSet<PrecoCompra> PrecoCompras { get; set; }
        public DbSet<PrecoDistribuidora> PrecoDistribuidoras { get; set; }
        public DbSet<Financeiro> Financeiros { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<UserRole>(userRole =>
            {
                userRole.HasKey(ur => new { ur.UserId, ur.RoleId });

                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                userRole.HasOne(ur => ur.User)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            }
              );

        }
    }
}