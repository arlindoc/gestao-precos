using concorrencia.domain;
using System.Threading.Tasks;
namespace concorrencia.repository
{
    public interface IConcorrenciaRepository
    {
        void Add<T> (T entity) where T : class;
        void Update<T> (T entity) where T : class;
        void Delete<T> (T entity) where T : class;

        Task<bool> SaveChangesAsync();

        #region Regiões
        Task <Regiao[]> GetAllRegioes();
        Task<Regiao> GetRegiaoById(int RegiaoId);
        #endregion

        #region Bandeiras
        Task<Bandeira[]> GetAllBandeiras();
        Task<Bandeira> GetBandeiraById(int BandeiraId);
        #endregion

        #region Postos Preco de Compra
        Task<PrecoCompra[]> GetAllPrecosCompra();
        #endregion

        #region Postos Preco de Compra
        Task<PrecoDistribuidora[]> GetAllPrecosDistribuidora();
        #endregion

        #region Postos
        Task<Posto[]> GetAllPostos();
        #endregion
       
        #region Preco de Venda
        Task<PrecoVenda[]> GetAllPrecos();
        #endregion
      
        #region Financeiro
        Task<Financeiro[]> GetAllLucros();
        #endregion
    }
}