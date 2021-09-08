﻿// <auto-generated />
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.9");

            modelBuilder.Entity("API.Entities.NestNotice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("NoticeDescription")
                        .HasColumnType("TEXT");

                    b.Property<string>("RegionName")
                        .HasColumnType("TEXT");

                    b.Property<string>("RockName")
                        .HasColumnType("TEXT");

                    b.Property<string>("RouteName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("NestNotices");
                });
#pragma warning restore 612, 618
        }
    }
}
