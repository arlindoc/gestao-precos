using AutoMapper;
using concorrencia.domain.Identity;
using concorrencia.web.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static concorrencia.web.Dto.UserDTO;

namespace concorrencia.web.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<User, UserLoginDTO>().ReverseMap();

        }
    }
}
