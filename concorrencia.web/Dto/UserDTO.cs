using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace concorrencia.web.Dto
{
    public class UserDTO
    {
        public class UserDto
        {
            public string UserName { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
            public string FullName { get; set; }
            public string Role { get; set; }
        }
    }
}
