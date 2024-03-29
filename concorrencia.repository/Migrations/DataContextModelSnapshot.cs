﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using concorrencia.repository;

namespace concorrencia.repository.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<int>("UserId");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("concorrencia.domain.Bandeira", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("NomeBandeira");

                    b.HasKey("Id");

                    b.ToTable("Bandeiras");
                });

            modelBuilder.Entity("concorrencia.domain.Financeiro", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Data");

                    b.Property<decimal>("Despesa");

                    b.Property<decimal>("LucroBruto");

                    b.Property<decimal>("MetaDespesa");

                    b.Property<int>("PostoId");

                    b.HasKey("id");

                    b.HasIndex("PostoId");

                    b.ToTable("Financeiros");
                });

            modelBuilder.Entity("concorrencia.domain.Identity.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("concorrencia.domain.Identity.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("FullName")
                        .HasColumnType("nvarchar(150)");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("concorrencia.domain.Identity.UserRole", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("concorrencia.domain.Posto", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BandeiraId");

                    b.Property<string>("NomePosto");

                    b.Property<int>("RegiaoId");

                    b.Property<string>("Tipo");

                    b.HasKey("id");

                    b.HasIndex("BandeiraId");

                    b.HasIndex("RegiaoId");

                    b.ToTable("Postos");
                });

            modelBuilder.Entity("concorrencia.domain.PrecoCompra", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Combustivel");

                    b.Property<DateTime>("Data");

                    b.Property<int>("PostoId");

                    b.Property<decimal>("Preco");

                    b.HasKey("Id");

                    b.HasIndex("PostoId");

                    b.ToTable("PrecoCompras");
                });

            modelBuilder.Entity("concorrencia.domain.PrecoDistribuidora", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BandeiraId");

                    b.Property<DateTime>("Data");

                    b.Property<decimal>("Preco");

                    b.HasKey("Id");

                    b.HasIndex("BandeiraId");

                    b.ToTable("PrecoDistribuidoras");
                });

            modelBuilder.Entity("concorrencia.domain.PrecoVenda", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Atual");

                    b.Property<string>("Combustivel");

                    b.Property<DateTime>("Data");

                    b.Property<string>("Pagamento");

                    b.Property<int>("PostoId");

                    b.Property<decimal>("Preco");

                    b.HasKey("Id");

                    b.HasIndex("PostoId");

                    b.ToTable("PrecoVendas");
                });

            modelBuilder.Entity("concorrencia.domain.Regiao", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Cidade");

                    b.Property<string>("Estado");

                    b.Property<string>("NomeRegiao");

                    b.HasKey("Id");

                    b.ToTable("Regioes");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("concorrencia.domain.Identity.Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("concorrencia.domain.Identity.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("concorrencia.domain.Identity.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.HasOne("concorrencia.domain.Identity.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("concorrencia.domain.Financeiro", b =>
                {
                    b.HasOne("concorrencia.domain.Posto", "Posto")
                        .WithMany()
                        .HasForeignKey("PostoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("concorrencia.domain.Identity.UserRole", b =>
                {
                    b.HasOne("concorrencia.domain.Identity.Role", "Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("concorrencia.domain.Identity.User", "User")
                        .WithMany("UserRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("concorrencia.domain.Posto", b =>
                {
                    b.HasOne("concorrencia.domain.Bandeira", "Bandeira")
                        .WithMany()
                        .HasForeignKey("BandeiraId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("concorrencia.domain.Regiao", "Regiao")
                        .WithMany()
                        .HasForeignKey("RegiaoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("concorrencia.domain.PrecoCompra", b =>
                {
                    b.HasOne("concorrencia.domain.Posto", "Posto")
                        .WithMany()
                        .HasForeignKey("PostoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("concorrencia.domain.PrecoDistribuidora", b =>
                {
                    b.HasOne("concorrencia.domain.Bandeira", "Bandeira")
                        .WithMany()
                        .HasForeignKey("BandeiraId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("concorrencia.domain.PrecoVenda", b =>
                {
                    b.HasOne("concorrencia.domain.Posto", "Posto")
                        .WithMany()
                        .HasForeignKey("PostoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
